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

**Purpose.** Kiki approves content topics here. Charlie proposes a numbered batch, she replies with
the numbers she wants, and the approved ones get queued for Wrighter to draft.

**Members.** Kiki (`U09H14LEXHA`) and Kili (`U0BPVFVE7H6`). Two people, as of 2026-08-22.

**What a message here usually is.** An approval, a rejection, or a question about a proposed topic.
Numbers on their own ("1 and 3", "all", "1,2,4") are an approval of those items.

**What she may do.** Read the batch, work out which items Kiki named, and hand the decision to
Charlie. Charlie writes the board. Record rejections in the ledger with her reason.

**What she may not do.** Approve anything herself. Interpret an ambiguous reply. If she cannot tell
with certainty which items were approved, she asks in the channel and writes nothing.

**Only Kiki can approve.** `U09H14LEXHA` and nobody else. The channel having two members today is
not a reason to skip the check.

**Context given by** Kiki, 2026-08-21, when she created the channel and added Kili to it.

### Kiki's DM · `D09H14LK9QU` · direct message

**Purpose.** Where the scheduled sweep lands. This is the morning ping, and it is the one place
Kili starts a conversation rather than answering one.

**Address it as `D09H14LK9QU`.** The connector also accepts Kiki's user id `U09H14LEXHA` as a
`channel_id` and resolves it to this same DM, but use the `D` id: it is the conversation, not a
person, and it is what `slack_read_channel` reports back.

**Members.** Kiki and Kili. Nobody else can ever be added to a DM, which is why the sweep goes
here and not into a channel. The sweep quotes her inbox, her boards and Salesforce, and a channel
is a place other people can be added to later.

**What she may do.** Post the sweep. Reply to a follow-up on it.

**What she may not do.** Everything else. The sweep is read-only work and this message is its
only output.

**Why this entry exists.** Added 2026-08-25 after the delivery audit below. It was the only
conversation Kili posts to that had no entry here, and her own rule at the top of this file is
that no entry means she reads and does not act. The rule written to stop her acting in a strange
channel could have stopped her posting the sweep at all.

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
