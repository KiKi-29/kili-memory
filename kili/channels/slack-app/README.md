# Slack, today's channel

**LIVE as of 2026-08-10 19:38 UTC.** Both cloud routines send as Kili. The steps
below are the record of how, and what to redo if the token is ever rotated.

Slack app **Kili**, app id `A0BP33M5VUH`, built from `slack-app-manifest.yaml` in
this folder. Kiki's DM channel with the bot is **`D0BNUQPH38F`**. Verified with
`test-send.py`, then both routine prompts patched and read back from the API.

If the token is rotated: run `test-send.py` with the new one, then re-apply
`routine-prompt-patch.md` to **both** routines,
`trig_01Rw6Pmh4sgUZZKvGXoLgr6s` and `trig_01WP42wSSgU77VmawCNHkrVR`.

## This DM is one-way, on purpose. Do not "fix" it.

Slack shows "Sending messages to this app has been turned off" at the bottom of
the thread. Leave it off.

Enabling the Messages tab would let Kiki type a reply, but **nothing is listening**.
The component that would have received it was `api/webhook.ts` in
`../../_archive/selfhosted-2026-08/`, and that build was retired because it could
not use Kiki's connectors, which made it a worse Kili. Turning sending on without
a listener means her replies disappear silently, which is strictly worse than a
notice telling her not to try.

The intended shape: Kili pings on Slack, Kiki picks the thread up with her in
Claude, where she has every connector. Slack is a notification channel here, not a
conversation channel. Any future attempt to make it two-way has to answer the
connector problem first, and archiving that build is the answer so far.

## The problem this fixed

The two cloud routines send their sweep via the claude.ai Slack connector, which
is authorised as **Kiki's own user** (`U09H14LEXHA`). Slack therefore shows the
message as from Kiki, with her photo, footed "Sent using Claude". The
`slack_send_message` tool has no `username` or `icon` parameter, so no amount of
configuration changes this.

Kiki wants the ping to read like a separate person messaging her. That means it
has to be sent with **Kili's own Slack credential** instead.

## Why this is possible

Both routines carry `Bash` and `WebFetch` in `allowed_tools`. So the routine can
make the Slack call itself rather than going through the connector.

## What it needs

**No new scopes.** An earlier draft of this file said to add `chat:write.customize`
or an incoming webhook. Both were wrong. `chat:write.customize` exists only to make
a bot post under a name other than its own, and this app is already named Kili with
a Kili avatar, so a plain `chat.postMessage` on its bot token arrives as Kili by
default. The five scopes in the manifest are sufficient: `im:write` opens the DM
from cold, `chat:write` posts into it.

A webhook is also the wrong shape here, because webhooks bind to a channel and the
target is a DM.

1. **Reinstall the app.** The manifest changed the scopes after creation, so Slack
   shows a yellow banner until someone reinstalls. Then copy the **Bot User OAuth
   Token** (`xoxb-`) from OAuth & Permissions.
2. **Put the token in both routine prompts.** A cloud routine cannot read secrets
   from Kiki's Mac and the routine config has no secrets field, so the prompt is
   the only place it can live. Accept it and rotate the token if it is ever
   exposed.
3. **Replace the send instruction** in both prompts. They currently say "Send Kiki
   a Slack DM to user U09H14LEXHA", which the routine satisfies with the claude.ai
   Slack connector. It has to become an explicit two-call Bash step instead, and
   the prompt should forbid falling back to the connector, or the model will use it
   when the curl fails.
4. **Edit both routines**, weekday and Sunday, not just the one.

## Blast radius of the bot token

Narrower than it first looks. A bot token's `im:history` and `im:read` cover only
conversations **the bot is in**, so it cannot read Kiki's DMs with anyone else. On
a leak, someone could read the Kili thread and post as Kili. That is worth
rotating over, and it is not the same as handing over her inbox.

## `slack.ts`

Reference copy of the send layer from the abandoned self-hosted build. Not wired
to anything. Worth reading for two things it got right:

- **A failed Slack call still returns HTTP 200.** The real status is `ok` in the
  JSON body. Checking `res.ok` alone silently swallows every auth error, every
  missing scope, and every bad channel.
- `conversations.open` is idempotent, so it is safe to call on every send. That is
  what lets a scheduled job open a DM from cold with no incoming message to reply
  into.

## Manifest notes

Five bot scopes, and each earns its place: `chat:write` sends, `im:history` is
what makes the event carry any text at all, `im:read` sees the conversation,
`im:write` opens a DM from cold, `users:read` resolves a name. `always_online` is
set true so a serverless sender does not show a permanently grey dot that reads as
broken. Avatar background is `#161616`, Eerie Black from the CUBE84 palette.
