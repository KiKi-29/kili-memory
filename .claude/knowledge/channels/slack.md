# Slack, as a channel Kili reaches Kiki through

Written 2026-08-10, from the abandoned self-hosted build and the live cloud
routines.

Kili is the sidekick. Slack is one channel, and channels are swappable. Do not name
anything after it. See `Kiki/kili/NOTICE.md`.

## The connector posts as Kiki, and cannot be made to do otherwise

The claude.ai Slack connector is authorised as Kiki's own user, `U09H14LEXHA`.
Anything sent through `slack_send_message` shows her name, her photo, and a "Sent
using Claude" footer. The tool's only parameters are `channel_id`, `message`,
`thread_ts`, `reply_broadcast`, `unfurl_app_links`. **There is no `username` or
`icon` parameter**, so a message sent this way can never appear to come from
anyone else.

This is why the scheduled sweep reads as Kiki DMing herself. To send as Kili, the
call has to be made with Kili's own Slack credential, which means the sender needs
to make a raw HTTP request rather than use the connector. Both cloud routines can,
they carry `Bash` and `WebFetch`.

## A cloud routine cannot read local secrets

Routines run in Anthropic's cloud, not on Kiki's Mac. No local env vars, no local
files. Any credential a routine needs has to sit in the routine prompt itself.

Consequence: prefer the least powerful credential that does the job. A Slack
**incoming webhook** can only post, to one destination, and reads nothing. A bot
token (`xoxb-`) can also read her DMs. For a one-way notification the webhook is
the right trade.

## Slack traps

- **A failed API call still returns HTTP 200.** The real status is `ok` in the JSON
  body. Checking `res.ok` alone silently swallows every auth error, every missing
  scope, and every bad channel.
- **Scope changes need a reinstall.** Editing a manifest leaves the app running on
  the old scopes with a yellow banner in the UI until someone reinstalls. Symptom
  is `missing_scope` in logs.
- **A bot hears its own messages.** Slack echoes the bot's own posts back as
  events. Without a `bot_id` guard the bot answers itself forever, and each reply
  costs a model call.
- **Practical message limit is around 4,000 characters.** Split on a paragraph
  break, then a line break, then a hard cut. Do not truncate.
- `conversations.open` is idempotent, so it is safe on every send, and it is what
  lets a scheduled job open a DM from cold.
- Turn off link unfurling on anything carrying a Salesforce or monday link. An
  unfurled preview leaks the contents of whatever it points at into the DM.

## Slack beats WhatsApp for this, and WhatsApp is closed anyway

Meta restricted the CUBE84 business account at the app-claiming step, which blocks
the WhatsApp Business API outright. Do not retry it.

Slack is also simply better for an unprompted daily ping: no 24 hour window, so no
pre-approved template and no 90 character variable limit, and no per-conversation
charge. The morning ping is an ordinary message.

## Transport-agnostic principle worth keeping

The abandoned build gave strangers a **different tool array**, not a different
prompt. Anyone not on the allowlist got an assistant with no Gmail tools at all,
so no prompt injection could reach the read tools even if it fully captured the
model. Enforce a boundary by withholding the capability, never by instructing the
model to decline. This holds regardless of channel.

## Waking her on a Slack message, added 2026-08-22

She used to find out about Slack only on a scheduled sweep. Now a message wakes her.

**How.** Slack sends the event to a small function, and that function calls the routine's API
trigger endpoint with a bearer token. The function has no brain: it verifies the request came from
Slack, then says "go look." It never passes the message content, so a forged call can at worst make
her look at a channel where nothing changed.

**Why not Slack Workflow Builder.** It would have removed the middle function entirely, but it needs
a Pro plan and CUBE84 is not on one. Settled 2026-08-22.

**Scopes.** Her app was DM-only, `im:history` and `im:read`. Hearing a channel needs channel scopes
added, and **a scope change needs a reinstall.** The app keeps running on the old scopes with a
yellow banner until somebody does it, and the symptom is `missing_scope`.

**Slack retries.** It wants an answer in three seconds and retries if it does not get one, so the
same message can wake her twice. **The reaction is what stops a double action:** she reacts to a
message once she has acted on it, so a second wake finds nothing left to do. The reaction is the
receipt and the dedupe marker in one object, and it needs no state file anywhere.

**She ignores her own posts.** Slack echoes a bot's own messages back as events. Without that guard
she answers herself forever, and each reply costs a model call.

**What a channel is for** lives in `registry.md`. No entry means she reads and does not act.

## The cloud cannot reach Slack. Settled 2026-08-22, stop retrying.

A cloud run's Bash tool cannot post to Slack. Not with the bot token, not through a relay, not
through anything. Measured from inside a run:

| Host | Result |
|---|---|
| `slack.com` | **403, CONNECT tunnel failed** |
| `hooks.slack.com` | **403** |
| our own `slack-event-relay.vercel.app` | **403** |
| `example.com` | **403** |
| `api.github.com` | 200 |
| `registry.npmjs.org` | 200 |
| `api.anthropic.com` | reachable |

The egress allowlist is a fixed set of developer infrastructure, and it is enforced above anything a
repository can widen. A `.claude/settings.json` declaring `sandbox.network.allowedDomains` was
pushed, confirmed present in the cloud checkout, and changed nothing. That setting governs the local
sandbox on the Mac, not the cloud proxy. It was reverted, because as written it would have
restricted the *local* sandbox to slack.com only.

**There is no route around this.** Not a relay, not a custom domain, not a webhook host. Do not
spend another run looking for one.

### What it means for her voice

**On Kiki's Mac, in a session, Bash reaches Slack and Kili speaks as Kili.** Verified.

**In a cloud run, the only way to reach Slack is the MCP connector, which posts as Kiki.** No
setting changes that.

The mitigation, and it is a mitigation rather than a fix: **prefix the message so a human can tell
who is speaking.** Open with `*Kili ·*` and the avatar being Kiki's becomes a cosmetic oddity
instead of a confusing one. Reactions have no such problem, because a reaction is a mark rather than
a voice.

This supersedes the 2026-08-10 note claiming the identity problem was fixed. It was fixed for runs
on the Mac, and the cloud is where the routines live.

### Push notifications do work from the cloud

Found while probing: a cloud run can send Kiki a mobile push natively, no Slack involved. A real
second channel for anything genuinely urgent, and it carries no identity confusion at all because it
is not pretending to be anybody.
