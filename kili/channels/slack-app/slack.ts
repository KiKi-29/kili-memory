/**
 * Slack, send side.
 *
 * Much simpler than the WhatsApp layer this replaces, and the reason is worth
 * stating: Slack has no 24 hour window. A bot can message you at any hour,
 * unprompted, with whatever text it likes. The entire approved-template
 * mechanism that shaped the old build is gone, and the morning ping is now an
 * ordinary message.
 *
 * The one Slack trap: **a failed call still returns HTTP 200.** The real status
 * is `ok` in the JSON body. Checking res.ok alone means silently swallowing
 * every auth error, every missing scope, every bad channel.
 */

const API = 'https://slack.com/api';

function env(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var ${name}`);
  return v;
}

async function call(method: string, body: unknown): Promise<any> {
  const res = await fetch(`${API}/${method}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env('SLACK_BOT_TOKEN')}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(body),
  });

  const json: any = await res.json().catch(() => ({}));

  // Slack answers 200 even when it refused. `ok` is the only real signal.
  if (!json?.ok) {
    const err = json?.error ?? `http_${res.status}`;
    throw new Error(`Slack ${method} failed: ${err}`);
  }
  return json;
}

/**
 * Slack's practical display limit is around 4,000 characters. Split rather than
 * truncate, preferring a paragraph break, then a line break, then a hard cut.
 */
function chunk(text: string, size = 3500): string[] {
  if (text.length <= size) return [text];
  const parts: string[] = [];
  let rest = text;
  while (rest.length > size) {
    let cut = rest.lastIndexOf('\n\n', size);
    if (cut < size * 0.5) cut = rest.lastIndexOf('\n', size);
    if (cut < size * 0.5) cut = size;
    parts.push(rest.slice(0, cut).trimEnd());
    rest = rest.slice(cut).trimStart();
  }
  if (rest) parts.push(rest);
  return parts;
}

/**
 * Resolve a user id to their DM channel. Idempotent, and safe to call on every
 * send: if the DM already exists Slack returns the same channel rather than
 * creating a second one. This is what lets the cron open a conversation from
 * cold, with no incoming message to reply into.
 */
async function dmChannel(userId: string): Promise<string> {
  const res = await call('conversations.open', { users: userId });
  const id = res?.channel?.id;
  if (!id) throw new Error('conversations.open returned no channel');
  return id;
}

/** Send to a user by id. Opens the DM if it does not exist yet. */
export async function sendDM(userId: string, text: string): Promise<void> {
  const channel = await dmChannel(userId);
  await postTo(channel, text);
}

/**
 * Send to a channel id directly. Used on the reply path, where the event
 * already told us which channel the message arrived in, so there is no reason
 * to spend a round trip re-opening it.
 */
export async function postTo(channel: string, text: string): Promise<void> {
  for (const part of chunk(text)) {
    await call('chat.postMessage', {
      channel,
      text: part,
      // Kili speaks in her own voice, not as a threaded reply, and never
      // unfurls links. An unfurled Salesforce or monday link in a DM leaks a
      // preview of whatever it points at.
      unfurl_links: false,
      unfurl_media: false,
    });
  }
}
