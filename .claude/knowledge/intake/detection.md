# Detecting a real request

Channel-side knowledge for `scout`. Gmail is the only source wired up today.
Adding a source means adding a section here, not changing the agent.

---

## Arrival channel is not resolution channel

**2026-08-09, Kiki, on an "open action items" sweep.** Two items were reported to her
as open and waiting on her. Both had already been answered on a monday board. Her
words:

> "if you see monday board you will know the answer to it."

And on why it happened:

> she asked about email, so I scoped to email.

**The rule: a request arriving in one channel is very often resolved in another.**
Scoping the check to the channel the ask arrived in produces confident false
positives. Before calling anything open, resolve it against every source you can
reach, not just where it came from. Gmail, monday, Salesforce.

The case, kept because the reasoning transfers:

- Naveena asked in a monday update on 4 Aug for a pick between three Figma options
  for the Webinar 3 registration page. No reply ever appeared in the update feed.
- Reading the update feed alone, it looks open and blocking.
- The **status columns** said otherwise. `Design` was `Design Completed` dated
  2026-08-04, and `Development` had moved to `In Staging` on 2026-08-07 with a live
  staging URL. The pick had been made and the work had moved two stages past it.

**Corollary, and the sharper half: on monday, read the status columns, not the
updates.** An update feed is a conversation and conversations trail off without a
closing message. The column is the state. This is the same failure as trusting a
field's label instead of opening it, one level up: trusting the discussion instead
of the record.

**Refinement, 2026-08-10, and it nearly cost a wrong answer.** The column is the
state, but the column can be *stale*. On the Coordinated Entry registration page
the `Development` column read `In Staging` dated 7 Aug, three days old, while the
actual current fact sat in a **threaded reply** on that subitem's update, posted
the same afternoon: Shashank's "this is ready for snagging, please take this up".
A chase message drafted off the column alone would have asked a dev for a status
he had just given. So the rule is now two steps, not one: **read the status
columns first, then read the update replies for anything newer than the column's
own timestamp.** A reply can outrun the column. Note that `get_updates` does not
return replies unless you pass `includeReplies: true`, so the default call hides
exactly the thing that would correct you.

**Second corollary: a stale parent row hides a finished child.** The parent
`Webinar Registration Landing Page` still read `Working on it` with a 7 Aug due date
while every subitem under it was done or in staging. Check subitems before trusting
a parent status.

**When a check is genuinely impossible, say so rather than defaulting to open.**
Some things live in no system you can reach. Travel desk requests, partner emails
and personal follow-ups have no monday trace, so monday cannot close them, and that
is a real finding, not a gap.

---

## Why keyword detection fails

Searching the inbox for `BRD` returns 49 threads and not one of them is a request. They
are all notification echo: monday mentions, Google Docs comments, Drive shares, all
reporting on work that was already logged somewhere else.

Every genuine request contains no process vocabulary at all. Detect on **shape**.

---

## The shape

Four things, and then the one that actually decides it.

1. **An internal sender.** `@cube84.com`.
2. **A design or dev name in To or Cc.** The ask is being handed to someone who builds.
3. **A content artifact.** An attachment (`.html`, `.md`, `.docx`, `.pdf`) or a link to a
   Google Doc or a Figma file.
4. **An imperative.** Someone is being asked to make something.

Kiki is on the thread in To, Cc, or Bcc. That is how it reaches this inbox at all.

### 5. Direction. Which way is the work travelling?

**All four tests above are satisfied by finished work coming back.** A builder
returning a deliverable has an internal sender, the design lead in Cc, an HTML
attachment, and a sentence that reads as an imperative if you match loosely. It
passes on shape and fails on meaning, and that is not a rare edge case. It cost
three weeks on the Loop emails and it put two wrong rows in the table below.

So before anything else, ask **who is the sender relative to the work**:

| Sender is | Direction | Verdict |
|---|---|---|
| The content owner, handing it to someone who builds | inbound to a builder | **Request** |
| The builder, handing the finished thing back | outbound from a builder | **Delivery. Not a request.** |

Two tells that separate them, neither of which is the verb:

- **Is there a builder in the To line at all?** A delivery usually goes back to
  the person who asked, with the builder's own lead in Cc. Nobody is being handed
  work.
- **Does the thread already contain the finished output?** Read the surrounding
  threads. Rendered test versions sent an hour before the source files means the
  build is done and this is the handover.

When the direction is outbound, stop. Do not classify a genre and do not look for
a board. Completed work is not an intake item. See the still-owed test in
`scout.md`.

### Verified requests

Every row here carries a real ask, and the work is travelling toward a builder.

| Date | From | The line that makes it a request | Sent to |
|---|---|---|---|
| 2026-08-06 | sayli.r@ | "I'm sharing the HTML code for a blog that needs to be designed." | design |
| 2026-07-28 | prabitha@ | "Could you please design the web page for our Alumni Engagement offering web page? Attached html has the content." | design |
| 2026-07-16 | prabitha@ | "Can you help with the design of this webpage? ... It needs to appear in Resources > Case" | design |
| 2026-04-06 | satha@ | "Attached are the latest versions of five key pages for the District360 website" | design + dev |

The Satha row is the useful one. Its verb is weak, no "please design" anywhere,
and it is still a request, because leadership is handing page content **to**
builders. Direction decides it, not the wording.

### Not requests, though they pass every shape test

These two sat in the table above as verified examples and taught the wrong lesson
for weeks. They are here as counter-examples now. Do not delete them.

| Date | From | Looks like | Actually |
|---|---|---|---|
| 2026-07-17 | naveena.s@ | "Loop email HTML file ... Find the attachment below" | Naveena is **design**. She is returning the source files for two emails she had already built and test-rendered earlier the same day. Sruthi, the design lead, is in Cc. No builder in the To line. A handover, not an ask. |
| 2026-04-10 | mythri.m@ | "Please find attached the PDF and HTML docs that follow the same model." | Mythri is answering a brief Kiki gave her hours earlier on the same thread. It went to Kiki and Sayli, with **no design or dev recipient at all**, and closes with "Do let me know what you think", which is a review ask, not a build ask. |

---

## Who originates

A prior, not an allowlist. Anyone internal can send one, these people actually do.

| Sender | Typically sends |
|---|---|
| prabitha@cube84.com | Higher Ed web pages, customer stories, blogs |
| satha@cube84.com | District360 pages, in batches, HTML attached |
| sayli.r@cube84.com | Blogs, as HTML for design |
| naveena.s@cube84.com | **Also design. See the both-sides note below.** Email and Loop assets |
| mythri.m@cube84.com | D360 marketing assets, PDF and HTML. Often replying to a brief rather than making one. |
| sakshi.s@cube84.com | SEO-driven page and blog changes |
| abhilaash.j@cube84.com | D360 page requests |
| shsuniljith@cube84.com | Housing page content |
| kathryn@cube84.com | D360 roundtable and event follow-ups |

## Who receives, which is the strongest single tell

**Design:** sruthi.p@ · neethi.n@ · anamika.h@ · naveena.s@ · sudarsan.k@ · manish.k@
**Dev:** surendra.v@ · vedha.h@ · shashank (Shashank Tripathi)
**Aliases:** webdev@ · mstrategy.team@ · solutionarchitect@

"Hi Nova Team" appears as a greeting for the design group. Read the actual recipients,
not the salutation.

### People who appear on both sides

**`naveena.s@` is on both lists, and that ambiguity is what caused the Loop
failure.** She originates email and Loop assets, and she is also design. So her
name in the From line tells you nothing on its own.

Anyone can appear on both sides. Read the role they are playing **in this thread**,
not the list they appear on:

- Naveena sending an HTML file to Sruthi, with Kiki Cc'd → design returning work.
  **Delivery.**
- Naveena sending a brief asking for a page to be built → she is the content
  owner here. **Request.**

The same applies to Mythri, and to anyone else who both commissions and produces.
The lists above are a prior about what someone usually sends. They are never a
verdict about direction.

---

## Imperative phrases seen in the wild

Cues, matched loosely. Not a whitelist.

```
needs to be designed          could you please design       can you help with the design
attached html has the content sharing the HTML code for     for design
attached are the latest       please find the attachment    ready for dev
please take it forward        please initiate               can you help with
needs to appear in            help create the design        please review it and
```

---

## Gmail queries

Run all, merge, dedupe by thread ID. Adjust `newer_than` to the window requested.

```
from:cube84.com has:attachment newer_than:7d -in:draft
filename:html newer_than:7d
filename:md OR filename:markdown newer_than:7d
subject:(design OR "web page" OR webpage OR blog OR "landing page" OR "case study" OR "success story") from:cube84.com newer_than:7d
"needs to be designed" OR "please design" OR "help with the design" OR "for design" newer_than:7d
"ready for dev" OR "take it forward" OR "attached has the content" newer_than:7d
```

### Kiki's sent mail is context, keep it

Query 1 returns Kiki's own sent messages because she is `@cube84.com`. **That is
deliberate. Do not filter it out.** Her replies inside a thread carry the decisions:
"Are Case Studies controlled from CMS?", "@Sakshi Singh please take it forward",
"looping +Mohan +Prabitha". Strip the sent mail and you get the ask without the
routing, the deadline, or the owner.

A sent message is rarely the request by itself. It is almost always the missing half of
one. Read it as part of the thread.

The real cost of query 1 is volume, not sent mail. It can return 200+ threads and
overflow the tool response. Handle that by paging, or by reading metadata first and
pulling full threads only for the ones that clear the shape test. Never by narrowing the
query to exclude her.

---

## Exclusions, applied first

Drop on sight. These are the overwhelming majority of matches.

| Drop | Because |
|---|---|
| `leads@cube84.com` | **The dangerous one.** Website lead notifications carry "landing page" in the subject and Cc `webdev@`, `mstrategy.team@` and `solutionarchitect@`, so they pass the "design or dev name in To or Cc" test that this file calls the strongest single tell. A lead is not a request. Drop before anything else. |
| `notifications@monday.com` | Echo of a board event already logged |
| `comments-noreply@docs.google.com` | Echo of a Doc comment |
| `drive-shares-dm-noreply@google.com` | Echo of a Doc share |
| Subject starts `Invitation:` / `Updated invitation:` / `Canceled event:` | Calendar noise. Prabitha sends a lot. |
| `winannouncement@cube84.com` on the thread | Deal celebrations |
| Body is only "X reacted via Gmail" | A thumbs up is not a request |
| Sender outside `@cube84.com` | Vendors, associations, prospects |
| `info@cube84.com` HR and verification mail | Not marketing work |
| Already in `handled.md` | Dealt with |

### One thing worth keeping from the noise

Google Docs share and comment notifications prove a document exists and is moving. Pass
these through as enrichment on the record when they match a request you caught. A
downstream consumer may need them. Never treat one as a request in its own right.

**A monday notification is echo for intake, but it is evidence for resolution.** The
exclusion above applies when hunting for new requests. When checking whether something
is still open, those same notifications point at the board row that holds the answer.
Follow them to the board and read the status column.

---

## Extending this file

To add a source, add a section with: how to query it, what the request shape looks like
there, and what the noise is. The agent's process does not change.

Candidates when someone asks: Slack DMs and channel requests, monday form submissions
that arrive without context, Drive shares that are handed over with no email.
