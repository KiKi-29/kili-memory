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
