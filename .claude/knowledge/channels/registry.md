# Channels Kili is in, and what each one is for

She wakes on **any** message in **any** channel she belongs to, mentioned or not. So before she can
respond sensibly she has to know what the channel is for. That is what this file is.

## The rule when a channel is not on this list

**She reads. She does not act.**

No entry means she is new here and does not yet know what this place is for. Acting on a guess is
how the first thing she ever does in a channel turns out to be the wrong thing, in front of whoever
is watching.

What she does instead, in order:

1. **Ask Claude.** The answer is often already written down: in this file, in
   `../intake/routing.md`, in `../current/open-threads.md`, or in the saved conversations under
   `.conversations/`. Claude looks, and if it finds the answer it tells her and adds the entry here
   so she never asks twice.
2. **Only if Claude genuinely cannot answer, ping Kiki once.** Say which channel, who added her,
   and what she can see. Ask what it is for and what she is allowed to do there. Then wait.
3. **Do not ask again.** One ping per channel. A silent answer is still an answer for now.

Kiki gives the context to Claude, and Claude writes it here. She should never have to explain the
same channel twice.

## How she knows she is new

She does not need telling. When she wakes for a message, she checks this file for that channel. No
entry means new. That is the whole mechanism, and it needs no extra plumbing.

---

## The channels

### `#blog-intake-channel` · `C0BRQ4DTJQN` · private

**Purpose.** Every content decision Kiki makes happens here. Two things arrive:

1. **Topic approvals.** Charlie proposes a numbered batch, she replies with the numbers she wants, and
   the approved ones get queued for Wrighter to draft.
2. **Revision reports, added 2026-08-26.** The Wrighter revision run posts here twice a day, 09:00 and
   18:00, saying what it revised on drafts sitting with a reviewer, what it deliberately did not do,
   and anything it is holding for Kiki to decide. Kiki's call: content decisions belong in the content
   room, and her DM stays for sweeps.

**Do not confuse the two.** A reply to a revision report is a decision about one draft, not an approval
of topics. Numbers on their own belong to a Charlie batch. If a reply could plausibly answer either,
ask which.

**Members.** Kiki (`U09H14LEXHA`) and Kili (`U0BPVFVE7H6`). Two people, as of 2026-08-22.

**What a message here usually is.** An approval, a rejection, or a question about a proposed topic.
Numbers on their own ("1 and 3", "all", "1,2,4") are an approval of those items.

**What she may do.** Read the batch, work out which items Kiki named, and hand the decision to
Charlie. Charlie writes the board. Record rejections in the ledger with her reason.

**What she may not do.** Approve anything herself. Interpret an ambiguous reply. If she cannot tell
with certainty which items were approved, she asks in the channel and writes nothing.

**Ignore the revision run's own posts.** They arrive from `U0BPVFVE7H6`, which is her own id, so the
ignore-my-own-posts guard covers them. They wake her because the relay fires on any message in this
channel; nothing is owed and she should stop cheaply. If she ever finds herself replying to one, that
guard has broken and it should be reported.

**Only Kiki can approve.** `U09H14LEXHA` and nobody else. The channel having two members today is
not a reason to skip the check.

**Context given by** Kiki, 2026-08-21, when she created the channel and added Kili to it.

### Kiki's DM with Kili · `D0BNUQPH38F` · direct message

**Purpose.** Where the scheduled sweep lands. This is the morning ping, and it is the one place
Kili starts a conversation rather than answering one.

**Address it as `D0BNUQPH38F`.** That is the conversation between Kiki and Kili the bot user,
`U0BPVFVE7H6`. Passing that user id as a `channel_id` resolves to the same DM, but use the `D` id:
it is the conversation, not a person, and it is what `slack_read_channel` reports back.

**`D09H14LK9QU` is a different conversation and it is the wrong one. Corrected 2026-08-25.**
An earlier version of this entry named it and called its members "Kiki and Kili". Both wrong. It is
Kiki's own self-DM: every message in it was authored by her account, each carrying a "Sent using
Claude" footer. Two sweeps ever reached it, 10 August and 25 August. She happened to see the first
and replied to it. The second she never saw, and that afternoon she asked why the routine had not
run.

**Why a self-DM is the worst possible address.** Slack does not notify anyone of their own message:
no sound, no badge, no unread mark, and it arrives already read. So the sweep was not merely in an
odd place, it was in the one place that guarantees silence. Posting *as* Kiki is a constraint of the
connector and the opening line answers it. Posting *to* Kiki as Kiki answers nothing.

**Why the mistake survived.** The read-back passed. It proved a message existed in a conversation,
and it could not know the conversation was the wrong one or that nobody had been told. Verifying
delivery and verifying arrival are different checks, and only the first had been built. Both sweep
prompts now require a `PushNotification` carrying the finding before a run may call itself done.

**Members.** Kiki and Kili the bot. Nobody else can ever be added to a DM, which is why the sweep
goes here and not into a channel. The sweep quotes her inbox, her boards and Salesforce, and a
channel is a place other people can be added to later.

**What she may do.** Post the sweep, then request the push that carries its finding. Reply to a
follow-up on it.

**What she may not do.** Everything else. The sweep is read-only work, and that message plus its
push are its only output.

**Why this entry exists.** Added 2026-08-25 after the delivery audit below, then corrected the same
day once the two DMs were told apart. Her own rule at the top of this file is that no entry means
she reads and does not act, so the rule written to stop her acting in a strange channel could have
stopped her posting the sweep at all.

---

## The delivery audit, 2026-08-25

Ten scheduled sweeps ran between 10 and 21 August. **One of them reached Slack**, on 10 August at
08:11 IST, and it is still the newest message in the DM. The other nine completed, reported
themselves successful, and delivered nothing.

They failed the same way every time: they tried to reach Slack with `curl` over Bash, to post under
Kili's own name, and the egress proxy answered 403. The 21 August run diagnosed this correctly and
**still did not fall back to the connector** — it read the identity rule as a prohibition, sent a
mobile push instead, and closed as a success.

Two things follow, and they are the reason this section is written down rather than just fixed.

**A run that finishes is not a run that delivered.** `status: active` and `worker_status: idle`
mean the session was created and ended. Neither says a message arrived. The only proof of delivery
is reading the destination.

**A constraint stated without a destination gets treated as a dead end.** The prompt said Bash
cannot reach Slack and named the connector, and the run still stopped, because nothing told it
which conversation to post into. Naming the tool is not naming the address.
