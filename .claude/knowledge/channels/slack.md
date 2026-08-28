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

The mitigation, set by Kiki on 2026-08-22 and **non-negotiable**: every message opens with this
line, verbatim, then a blank line, then the content.

> _Kili here, Kiki's AI sidekick posting on behalf of her. Any mistakes, tag Kiki. I am still learning._

It is not a style choice and not open to shortening. A message from Kiki's account that Kili wrote
is a colleague reading something they believe Kiki said, and the line is what keeps that honest. It
also tells a reader what to do about an error, which "tag Kiki" supplies and a bare name prefix does
not.

Reactions carry no line. A reaction is a mark, not a voice.

This supersedes the 2026-08-10 note claiming the identity problem was fixed. It was fixed for runs
on the Mac, and the cloud is where the routines live.

### Push notifications do work from the cloud, and are now mandatory on every sweep

A cloud run can send Kiki a mobile push natively, no Slack involved. It carries no identity
confusion at all, because it is not pretending to be anybody.

**Promoted 2026-08-25 from a nice-to-have to a required step.** It was written up as "a real second
channel for anything genuinely urgent". That undersold it. Slack does not notify anyone of their own
message, and the connector posts as Kiki, so **every** Slack message a cloud run sends her arrives
silent and already read. The push is not a second channel for urgent things. On a cloud run it is
the only channel that makes a noise, which makes it the whole of the notification.

Proof from one morning. On 25 August the Charlie run and the Kili sweep both delivered and both
passed their read-backs. Charlie called `PushNotification`; Kili did not. Kiki replied to Charlie's
batch within hours and did not know the sweep had run at all. Same day, same sandbox, same
connector, opposite outcomes, and the push was the only difference.

Both sweep prompts and `kili.md` now require it: sent, read back, pushed, and all three reported.
The push carries the finding, not the fact that a message exists.

## The GitHub relay. Measured 2026-08-25.

The section above says there is no route around the egress block and to stop looking. **That is
still true for reaching Slack directly, and it is now too strong as written.** GitHub is on the
allowlist, and GitHub can reach Slack. So a relay exists, in one direction only.

**What works.** `KiKi-29/kili-reports` is a private repo holding one workflow and a `reports/`
folder. A report file pushed there fires a GitHub Action, which posts to Slack with Kili's own
`xoxb-` token from repository secrets. Tested twice from the Mac, and both messages arrived in
`D0BNUQPH38F` **as Kili**, not as Kiki. The token never touches a routine prompt.

**THE RELAY IS LIVE. A cloud run fires it. Proven 2026-08-25.**

Everything below this line supersedes the earlier claim that a cloud run could not start it. That
claim was true only because the routine was not configured for it.

**The cause was `session_context.sources`, not permissions.** A cloud run gets a git credential
*only* for the repositories listed as its sources. The sweeps listed `kili-memory` alone, so
`kili-reports` was uncloned and uncredentialed, and the push 403'd. Add it as a second source and
the run gets both a checkout and a working credential.

The Claude GitHub App **was already installed** on `kili-reports` the whole time — four months, on
*Only select repositories*, alongside `crux-bootcamp-mode`. The earlier note blamed a missing
install and that was simply wrong. Nobody could check it from a session, which is exactly how the
bad guess survived: `gh api /user/installations` needs an app-authorized token.

**Measured from inside a cloud run, 2026-08-25 08:05 UTC:**

| Route from a cloud run | Result |
|---|---|
| `git push` to `kili-reports` **when listed as a source** | **SUCCEEDS.** `77887dd..e946573 main -> main`, first try, no force |
| Relay Action after that push | fired in 1s, completed in **8s**, posted **as Kili** |
| `api.github.com/repos/KiKi-29/kili-reports` | **200** — app is installed |
| `api.github.com/repos/KiKi-29/kili-memory` | **403** — *"GitHub access is not enabled for this session. An org admin must connect the Claude GitHub App for this organization."* Correct and intended: the app is deliberately NOT installed there |
| `POST /repos/…/dispatches` | 403, refused by the agent proxy. Irrelevant now — push is the route |
| `GITHUB_TOKEN` / `GH_TOKEN` | 14 characters, placeholders. Auth is injected by the proxy (`http.proxyauthmethod basic`), there is no token, no credentials file and no helper |

**So `kili-memory` read-via-API 403s while its clone works.** That is the wall Kiki asked for holding
exactly as designed: a scheduled run can read its own definition and cannot rewrite it.

**All three routines now deliver this way** — both sweeps and the channel wake. They write
`reports/<stamp>.md` with a `<!-- slack-channel: … -->` first line, commit as `Kili`, and push to
`main`. The Action strips the marker and posts to that channel.

**Consequences, and they are the whole point:**

- Messages arrive as **Kili**, her name, her avatar, her `APP` badge, her user id `U0BPVFVE7H6`.
- **The disclosure line is gone from all three prompts.** It existed only because the connector wore
  Kiki's name. Claiming to post on her behalf is now false, and a false disclosure is worse than none.
- **Slack notifies her properly**, because a message from Kili is a message from somebody else.
- **The self-wake loop closes.** Her own posts previously went out under Kiki's account, so her
  ignore-my-own-posts guard could not see them and she woke herself — four wakes on 25 August, two
  self-inflicted. Her posts now carry her own id.

**Still true: the connector is the only way to place a reaction.** The relay posts messages only. So
reactions stay under Kiki's account. A mark is not a voice, so this is acceptable, but it is why a
correctly-attributed message can still carry a receipt that looks like Kiki's.

**Still true: Bash cannot reach `slack.com` from the sandbox.** Nothing above changes that. The relay
works precisely because GitHub is the intermediary.

**Why the reports repo is separate from `kili-memory`.** Opening the push route means granting a
cloud run write access. Granting it on `kili-memory` would let a scheduled run edit `kili.md` — the
file that tells it how to behave — and the edit would apply on the next run. Kiki chose the separate
repo on 2026-08-25 for exactly that reason. `kili-reports` holds no instructions and nothing reads
from it, so a run there can publish but can never rewrite its own rules. **Keep it that way: if the
app is ever installed, install it on `kili-reports` only.**

**The reports repo is private and must stay private.** A sweep quotes her inbox, her boards and
Salesforce, so those files can name real people.

## What the relay is allowed to carry. Added 2026-08-28.

The relay made length free, and that turned out to be a problem rather than a feature.

Before it, a long message was awkward to send. Now the Action splits anything oversized on paragraph
boundaries and threads the remainder, so nothing pushes back on volume. Five routine prompts also
carried the line *"do not truncate it to fit"* — written on 25 August to stop truncation at Slack's
message limit, and read as licence to write long. On 2026-08-28 a sweep arrived at **sixty lines
across nine blocks with seven bare row ids**. Kiki's word was *overwhelming*.

**So the shape is fixed, and it is not the relay's job to fix it.** The relay will happily post
whatever it is given. The ceiling lives in `.claude/agents/kili.md` under "Talking to Kiki":

- **Three items, two lines each**, plus one offer line naming what was held back.
- **Never a bare id.** Name the thing and link it: `<https://cube84-bunch.monday.com/boards/{boardId}/pulses/{itemId}|the row's real name>`.
  A channel is `#blog-intake-channel`, not `C0BRQ4DTJQN`.

Charlie's weekly batch is the one exception on count, because up to six topics *is* its output. One
line per topic, and the id rule applies in full.

### `archive/` is committed and never posted. Do not "fix" this.

Full working notes go to **`archive/<date>-<run>.md`** in `kili-reports`. Only the short message goes
to `reports/**.md`.

The workflow fires on `paths: reports/**.md`, so a file under `archive/` is committed, versioned and
readable by the next run, and silent. **That path filter is load-bearing.** Widening it to `**.md`
would look like a tidy-up and would start posting the long version, which is the exact thing being
prevented. Nothing is lost by holding detail back, because it is in git.

