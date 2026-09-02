# Routing a caught request to a board

Board-side knowledge for `scout`. Genre decides the board. Board decides the
fields. All IDs below are verified live.

---

## Genre to board

| Genre | Cues | Board | Board ID | Group | Group ID |
|---|---|---|---|---|---|
| **Blog** | "blog", sent to design for layout, belongs in the content calendar | Blog Tracker 2026 & 2025 | `8422767857` | current month | see month table |
| **Web page** | "web page", "webpage", an offering or industry name, lives in nav | WebDev - Marketing Management | `9189704731` | New Requests | `group_mkthk7c2` |
| **Customer story** | "success story", "case study", "Resources > Case" | WebDev - Marketing Management | `9189704731` | New Requests | `group_mkthk7c2` |
| **Landing page** | "landing page", "LP", an event or campaign name, QR code | WebDev - Marketing Management | `9189704731` | Ads Landing Pages | `group_mkv1z0zj` |
| **D360 page** | district-360.com, D360, downtown, BID, place management | WebDev - Marketing Management | `9189704731` | D360 Website | `group_mm4hfh57` |
| **D360 revamp page** | explicitly part of the revamp workstream | WebDev - Marketing Management | `9189704731` | D360 Website Revamp | `group_mm3xe4j2` |
| **Email asset** | "email", "Loop email", newsletter, a send rather than a page | **no home yet**, see below | | | |
| **Vendor or partner** | a company selling to us or supplying us, licences, NDA, MSA, empanelment, tooling procurement | **deliberately none**, see below | | | |
| **Ambiguous** | anything you are not sure of | none | | | |

### Email assets: CUBE84 workspace only

Email assets belong in the **CUBE84 Marketing** workspace (`9810721`), the same one that
holds WebDev and Blog Tracker.

The D360 `Newsletters` board (`8681176658`) is **not** the answer. It sits in the
**D360 Marketing** workspace (`10244189`), so filing a Higher Ed email there puts CUBE84
work on a District360 board.

There are two CUBE84-workspace candidates. **Neither is clean**, and an earlier version of
this file wrongly said neither existed:

| Board | ID | State |
|---|---|---|
| Higher Ed \| Newsletters | `18406227083` | Nithya created it 30 Mar 2026 and it has not been touched since. 5 items: 3 real rows stuck at `Content Ready` with April release dates, plus leftover template rows in a group still called `Group Title`. Columns are **Content** and **Design** with no send-owner column, and groups stop at April 2026. |
| Higher Ed | `18401887498` | An untouched default shell. Two groups both named `Group Title`, stock Person/Status/Date columns, last updated 27 Feb 2026, and it lives in the **ABM** folder rather than a content one. Not a candidate. |

There is also a **one board per campaign** pattern in this workspace: `Nonprofit Technology
Conference'25` (`8708956292`) carries an *Email Marketing Tasks* group alongside Campaign
Strategy and Creatives for Paid Ads, and Coordinated Entry Webinar / Housing NAEH 2026
follow the same shape. On that pattern a two-email product campaign belongs to its own
campaign board, which for Loop does not exist.

### The rule for email, from Kiki, 2026-08-09

> "Usually emails dont go to the webdev team, but it is important to go into monday boards
> and then tagging Sayli or Mohan is important. So they pick work from there with details."

So: **email work that is still owed gets a monday row with Sayli or Mohan tagged.** They
work from the board, so a row with no owner tagged is a row nobody picks up. Email does
not go to WebDev, but "not WebDev" never meant "no board".

This supersedes an earlier version of this file that said escalate and stop. That rule was
built on the false premise that no board existed, and it is a large part of why the Loop
thread sat for three weeks.

Escalation for email is now only for two cases: the work is already **done** (see the
still-owed test in `scout.md`), or you have checked properly and genuinely cannot pick
between the candidates. Not knowing which board is a question to be asked, not a reason to
stop.

Precedent worth knowing: the Hamilton customer story went to WebDev as
`CASE STUDY : HAMILTON`, not to a separate board. Follow that.

#### Which Mohan, and which Sayli. Written 2026-08-19.

Kiki's quote says "Sayli or Mohan". Both names are ambiguous in this account, and one of
them produced a wrong answer on 2026-08-19.

| Name as written | Full name | Address | Owns |
|---|---|---|---|
| Mohan | Mohan S | `mohan.s@cube84.com` | **CRM and Pardot configuration.** Lead Source, form to CRM mapping, notification routing. This is the Mohan in Kiki's quote above, and the Mohan named throughout the BRD conventions. |
| Mohan Kumar | Mohan Kumar Srinivasan | `mohankumar.s@cube84.com` | **D360 product and sales enablement.** Demos, product walkthrough video, prospect collateral. Kathryn McKissick assigned him the San Diego parks reservation video on 2026-08-18. |
| Sayli | Sayli Rajguru | `sayli.r@cube84.com` | Content, blogs, customer stories. Sr. Market Research Analyst. |
| Manish | **Manish Karoor** | `manish.k@cube84.com` | **The Manish who reviews case stories and design work.** Prabitha names him as a point of contact when she is out. |
| Manish | a second colleague | `manish.a@cube84.com` | Not the reviewer. Exists, and is close enough in the address book to be picked by mistake. |

There is a third Mohan-shaped trap. Salesforce Tasks logged from Gmail are owned by an
integration user that renders as **Mohan Kumar**, whoever actually sent the mail. See
`../crm/salesforce-pardot.md`. A Task owner of "Mohan Kumar" is not evidence that Mohan
Kumar Srinivasan did anything.

It has already happened with Manish. On 2026-08-18, on the Anonymized Advancement design
thread, the wrong Manish was tagged and Prabitha quietly added Manish Karoor to the same
thread to get the review moving. Kiki's instruction, 2026-08-19: **this is an FYI for you
and nothing else. Do not flag it to Shanmathi, to Prabitha, or to anyone.** It was an
ordinary human slip, it was already fixed by the person who noticed, and raising it would
cost more than it recovers. Know it so you read that thread correctly, and say nothing.

**Never resolve a bare first name to an address. Read the address in the thread.** On
2026-08-19 a sweep reported the San Diego video as assigned to `mohan.s@`, which would have
put a product video on the CRM owner, and separately rendered `sayli.r@` as "Sayli Rao"
because no knowledge file recorded her surname. Both were name guesses dressed as facts.

### Vendor and partner threads stay off-board, deliberately

**Kiki's decision, 2026-08-10.** These get no monday row and no board. This is a rule,
not a gap, and a sweep must not keep re-raising them as unlogged work the way the Loop
thread was re-litigated for three weeks.

Why: every board in this file is a **delivery** board. A row exists so somebody picks work
off it. A vendor thread is a decision Kiki is making, usually alone or with Satha, and
there is no queue to hand it to. Putting it on a board invents a workflow that does not
exist and buries the real one.

Two cases on the same day proved the rule:

- **BD Vault AI**, Nambi Arooran Raghupathy. Licence allocation, and the second seat was
  resolved between Akash and their PM without Kiki. Nothing to build, nobody to tag.
  Kiki's ruling: "not something for me to address yet. Akash will figure that out."
- **LevelShift**, a staffing vendor who is also a competitor (Demandblue). NDA and MSA
  empanelment. It lives in **Salesforce**, on lead `00Qfw00000ZThwgEAD`, because it is a
  relationship record, not a build.

So the routing for this genre is: **Salesforce if it is a relationship worth a record,
otherwise nowhere.** Note it, tell Kiki, do not create a row.

`detection.md` already drops these before classification, because both arrived from
non-`@cube84.com` senders. That filter is doing the right thing for the wrong reason, so
do not rely on it: a vendor thread forwarded internally would pass the filter and still
needs this rule.

### Blog Tracker month groups

| Month | Group ID |
|---|---|
| August 2026 | `group_mm60qn4y` |
| July 2026 | `group_mm5bk8gg` |
| May 2026 | `group_mm334jmf` |
| April 2026 | `group_mm1r92sw` |
| March 2026 | `group_mm0v7xcr` |
| February 2026 | `group_mm07axq9` |
| January 2026 | `group_mkz9y8bm` |

Months after August 2026 are not in this table. Call `get_board_info` and match the group
title to the target publish month rather than guessing an ID.

---

## WebDev - Marketing Management fields

Board `9189704731`.

| Column | ID | Type | What to put |
|---|---|---|---|
| Name | `name` | name | The thing being built, in team language. Not the email subject. |
| Quick Summary | `long_text_mkv1r6vt` | long_text | Two sentences. What is being built and why. "Please work on X" is not a summary, half the board says that and it helps nobody. |
| Owner | `person` | people | The dev or designer named in the request. Empty rather than guessed. |
| CS/D360 | `dropdown_mkv1m34e` | dropdown | `Core Services (CS)` or `D360`. `District 360` is legacy, do not use on new rows. |
| Type | `dropdown_mkv1ka8m` | dropdown | `Task` for a build, else `Feature`, `Bug Fix`, `Incident`, `Project`, `Large Initiative`. |
| Is it task-ready? | `boolean_mkv1jqxa` | checkbox | Checked only when nothing is missing. A gate, not a history note. |
| Status | `status` | status | `Not Yet Started` by default. `BRD Under Review` only when the caller passes `brief_required: true`. |
| Task Intake Date | `date_mkv1c5e8` | date | **The date the request arrived.** Never today. |
| BRD File | `file_mkv1t5ks` | file | The brief document link. **Settable by API, but not the obvious way.** A plain URL string fails with a 500 on both create and update. It is a real `file` column and wants a LINK asset. Use the generic `change_column_value` mutation with this exact shape, verified working 2026-08-09: `{"files":[{"name":"BRD","fileId":"<any uuid4>","fileType":"LINK","createdAt":<epoch ms>,"createdBy":"<monday user id>","linkToFile":"<url>"}]}` Kiki is `72233449`. Put the link in `link_mkvb8bb6` as well, since that column takes a normal URL and is the fallback if this ever breaks. |
| Gdoc/Prod/Staging Links | `link_mkvb8bb6` | link | Content doc, Figma, or staging URL from the request. |
| Deadline | `date4` | date | Only if the request states one. |
| Page URL | `linkelpm5o2e` | link | The live prod URL, **once deployed**. See the standing ask below. |

### Three fields that are dead, and why to fill them anyway

**Task Intake Date is empty on every item created in 2026.** The board runs a formula
column computing `DAYS(Deadline, Task Intake Date)`, so turnaround has been unmeasurable
all year. The request carries a timestamp, so fill it. The measurement returns with
nobody having to change a habit.

**`BRD Under Review` has never been used, not once across 169 items.** It is the one
label that makes a missing brief visible on the dev team's own board instead of arriving
as a chase message. Set it whenever the caller flags it.

**`Is it task-ready?` is currently checked after deployment**, which records history
instead of gating work. Use it as the gate it was built to be.

---

## The BRD gate, and why it keeps failing

**Surendra asked for this in writing on 2026-05-07** and nobody answered him. Thread
`19dfe6157930f3c5`, "SDR Auto-Reply Trigger Update | Intent-Based Logic", message
`19e0169656badb24`. His words:

> "Also, moving forward, the landing page or any new page BRD should include this value to
> ensure a smoother development process."

The BRD sentence appears exactly once as new content across all 30 messages in that
thread. Every later occurrence is quoted reply history. Nobody acknowledged it, agreed to
it, or actioned it.

**What that cost.** Eleven weeks later, on 2026-07-31, Surendra had to ask again by hand,
on the Alumni Engagement item (`12657776630`, update `5421027250`):

> "BRD is missing. Please provide details such as whether this is a new page or a revamp of
> an existing page, along with the SEO metadata."

He got answers in monday comments on 2026-08-03 and shipped on 2026-08-04. The
`BRD File` column on that item is **still empty**. So the brief never existed as a
document, only as a comment thread, and the next person to open that row sees nothing.

**The lesson, which is about mechanism not diligence.** A brief that lives in a comment is
not a brief. Asking a dev to chase one is not a process. Three of the fields above already
encode the gate and all three are unused: `BRD Under Review` makes the gap visible on the
dev team's own board, `Is it task-ready?` blocks the start, and `BRD File` holds the
artifact. Nobody has to change a habit for this to work, they only have to be set.

Written 2026-08-09 during the 90-day backlog sweep.

### The standing ask on Page URL, from Kiki, 2026-08-05

On the same Alumni item, update `5435009975`:

> "One process ask going forward: paste the live prod URL on the item once a page is
> deployed. We caught this after the fact. Having the URL on the item on the files column
> would have let me check the slug, canonical, and meta before it went out instead of after."

Page URL (`linkelpm5o2e`) is populated on 2 of 169 items. On the Alumni row the prod and
staging URLs live only inside update comments, which is exactly the failure she is
describing. When a row is marked deployed and the URL is anywhere in the thread or the
comments, put it in the column.

---

## Dupe-checking, which is not optional

The WebDev board is already dirty and a careless create makes it worse: a live item
literally named `test`, twelve rows named `Case Study- 13 New cases + Landing Page`, and
eleven rows named `<place> is ready for dev from the D360 Website Revamp board` all
created inside one twenty second window on 2026-07-27 by an automation.

### Which columns to actually search

Do not reason about column *types*. People paste URLs into whatever box is in front of
them, so the type on the column tells you nothing about what is in it. `BRD File` is
typed as a file column and is used as a text field. Search these specific IDs.

**WebDev - Marketing Management `9189704731`**

| Column | ID | Type | Holds in practice |
|---|---|---|---|
| BRD File | `file_mkv1t5ks` | file | Pasted Google Docs URLs, sometimes a live page URL |
| Gdoc/Prod/Staging Links | `link_mkvb8bb6` | link | Staging and Figma URLs |
| Connected Board Item Link | `file_mm442pdd` | file | A URL to the originating item, including its post, e.g. `.../boards/18406741522/pulses/12091169744/posts/5267949495`. Also holds plain Doc URLs. |
| Connected Boards (CB) | `board_relation_mkv5yf8e` | board_relation | A real link to the twin line item on another board |
| Figma Files | `file_mkz3fm8d` | file | Figma proto and Drive folder URLs |
| Page URL | `linkelpm5o2e` | link | The live page, on form-submitted rows |

**Blog Tracker 2026 & 2025 `8422767857`**

**Kili may create and update rows here as of 2026-09-02.** Kiki's decision. Until then this was the
one board she was forbidden to write to, because it is Abhilaash Jaishankar's team production board
and moving a topic onto it was a deliberate human step. Propose-first still applies: she shows Kiki
the row and creates it on a yes. **Charlie and Wrighter remain blocked** — anything of theirs that
needs a row here comes through Kili.


| Column | ID | Type | Holds in practice |
|---|---|---|---|
| Doc Link | `text_mknah1bh` | **text** | The content doc URL, and sometimes the Gmail thread URL |
| Link to Blog | `link` | link | The published post |
| Files | `file_mkts2ff` | file | The attachment |
| link to WebDev | `board_relation_mkvg28wn` | board_relation | The twin build row. Note the decoy: `board_relation_mkvgaam4` has the identical title and an empty `boardIds`, so never match this column by title. |

### The order

1. **Connected line item.** Check the board_relation columns first. The boards already
   cross-link: a blog that also needs a build exists as a Blog Tracker row and a WebDev
   row joined by a relation. Verified live on Yerba Buena CBD, two blog rows, and TAP.
   If the relation already exists, the work is logged. Stop.
2. **The Gmail thread ID.** Search every column above for it. Real case: Blog Tracker row
   `12743425675` carries `mail.google.com/mail/u/0/#inbox/19fd6bab359069a5` in `Doc Link`,
   a **text** column, which is exactly why searching "the link column" finds nothing.
3. **The artifact.** Google Doc ID, attachment filename, Figma node ID. These survive the
   trip from email to board when nothing else does.
4. **The wording.** Last, and distrust it. Two traps:
   - Titles get rewritten. That same blog landed on the board as "Student involvement
     predicts alumni giving. Most institutions lose the data at graduation." while the
     email subject was "Blog Design Request - Student Involvement and Alumni Giving".
     Title similarity alone would have missed it and created a duplicate.
   - Titles get misspelled. "Alumini Engagement Web Page" is on the WebDev board with
     that spelling, so searching "Alumni" misses it.

If a plausible match exists, propose **updating** it. Never create a twin.

Never create rows matching the automation naming pattern. Those are generated, not
requested, and they already exist.

---

## Boards outside WebDev where build work actually happens

WebDev is not the only place work moves, and a sweep that only reads WebDev will report
"not started" for things that are already in flight.

**Daily Tracker `8820743652`** and its subitems board `8820831439` are the design team's
own tracker. Verified 2026-08-09: `12558061773` "Corporate Engagement Portal" sat there at
status `Done` dated 2026-07-23 with three HTML files attached, and `12393070228`
"Corporate Engagement Video" at `Design Review` dated 2026-07-28. Neither has a WebDev row,
neither has a BRD, and neither ever appeared in Gmail. A Gmail-only sweep reports both as
untouched.

When checking whether a named workstream has started, search monday `ITEMS` account-wide
for the name, not just the WebDev board. The item may carry no updates at all, so absence
of an update log is not absence of work.

---

## When nothing fits

A request with no board, no group, or no genre is not a failure, and it is not a thing to
force somewhere plausible. But it is also **not automatically a question for Kiki.** It
goes to Kili, who works it first.

Report the gap, do not improvise, when any of these is true:

- no board exists for the genre
- a board exists but sits in the wrong workspace for this business unit
- the board exists but has no group for the target month
- you cannot tell the genre
- an existing row might be the same thing but you are not confident

**How to report it.** Not "no board exists". That is a conclusion, and Kili cannot check a
conclusion. Say what you did and what you found, in this shape:

```
gap:        which decision you could not make
checked:    the boards, queries and columns you actually looked at
found:      what came back
missing:    the specific fact that would settle it
guess:      what you would do if forced, and your confidence
```

The difference matters. "No board exists for email" was accepted as fact and cost three
weeks. "I searched the workspace listing and found none" would have been questioned
immediately, because a listing has a result cap and a search does not.

A wrong row on a shared board is visible to the whole team and somebody has to clean it
up. But a gap handed up with no working shown is almost as expensive, because nobody
downstream can tell whether the search was the problem or the world was.

## Adding a board

Add a genre row to the table, a field table, and any group IDs. Nothing in the agent
changes.
