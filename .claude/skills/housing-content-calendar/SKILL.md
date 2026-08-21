---
name: housing-content-calendar
description: >
  Charlie's weekly pipeline. Turns the outbound team's conversation tracker into an
  evidence-backed content calendar for the Homelessness and Housing market, routing every topic
  to either the SEO/GEO/AEO bucket or the Thought Leadership bucket, producing a branded HTML
  calendar, and writing approved topics to the private intake board for Wrighter to draft.
  Use when the user says content calendar, housing content plan, what should we write about,
  mine the conversation tracker, run Charlie, or asks what the outbound conversations are telling
  us to publish. This is Agent 1 of the CUBE84 content system.
---

# Housing Content Calendar

Agent 1 of CUBE84's content system, and Charlie's entry point.

- **Agent 1, this skill:** mines the outbound tracker, produces topics, gets them approved,
  queues them.
- **`wrighter`:** produces each approved piece and pushes a CMS draft. It refuses a `rewrite` or `extend`, because the CMS cannot update a live page.
- **Agent 3, visuals:** later.

The output of a run is a **proposal**, never a commitment. Nothing reaches the board until Kiki
approves that specific batch by number.

Load `.claude/agents/charlie.md` behaviour if you are running this outside a Charlie subagent.
The rules there about subtraction, provenance and PII govern this pipeline and are not repeated
in full here.

---

## Verified references

All of these were confirmed live on 2026-08-20. They are claims, not permanent facts. Check one
before it decides your output.

| Thing | Value |
|---|---|
| Tracker, discover by | Drive title pattern `Weekly Conversations Report`, take newest `modifiedTime` |
| Tracker, current file | `1ZnXHAP0r0pUCNTunzepjuJnM7SAyJ_S-oDsBvulzgxI` (`WE 14-08`, **229 log rows**, 14 weeks, 5 tabs) |
| Tracker folder | `Outbound 2026`, `1UHJN40J_izxwqZlsidoldTDU3Evb0R24` |
| Published-topic dedupe | `Already existing Blog topics`, `1gjqkEuWL2YKH6tJRyUElkI_AZ1LNh2TcQxelQCLA0JM` |
| Retired intake sheet | `CUBE84 Blog Automation Pipeline - Intake Sheet`, `1_sj28P-ZH3pm987xz9J3V8ZZ7zPwGwNRa8UzRqVmTNc` |
| Intake board | `Blog Automation Intake Sheet`, private, workspace `9810721` (CUBE84 Marketing) |
| Team production board | `Blog Tracker 2026 & 2025`, `8422767857`. Not ours to write to. |
| Ledger | `.claude/knowledge/content/housing-signals.md` |
| POV spine | `.claude/knowledge/content/housing-pov.md` |
| Audience | `.claude/knowledge/audiences/housing-homeless.md` |

**The tracker title changes every week.** It carries the week-ending date. Resolve by pattern,
report which file and which week you read, and never trust a hardcoded id to still be current.

**Three numbers in that file disagree about how many conversations there are.** The log tab holds
229 data rows. Counting lines that begin `| WE ` returns 243, because the pivot tab's 14 week
labels start with the same token. The pivot's own grand total says 218. Use the log tab's data
rows, and if you report a total, say which tab it came from.

**The housing motion starts at WE 19-06.** Everything before it is a different product motion:
WE 15-05 to WE 29-05 is intellectual-and-developmental-disability, behavioral health and CBO case
management, and WE 05-06 to WE 12-06 is higher-education student success. In `backfill` mode, say
that rather than reporting a low in-scope ratio as though the housing motion underperformed.

---

## Modes

| Mode | Does |
|---|---|
| `weekly` | Default, and what the routine runs. Mine the newest week only. |
| `backfill` | Mine every week in the tracker. For the first run and after a long gap. Expect many signals to be historical, and say which weeks each one spans. |
| `topic` | One signal named by the user. Skip mining, run bucket routing and validation only. |
| `dry` | Any of the above with every write disabled. No board items, no ledger update, no Slack. Use this to prove the read path before trusting the write path. |

---

## Pipeline

### Step 0 — Resolve the tracker

Search Drive by title pattern, sort by `modifiedTime`, take the newest. Report the file title,
the week it covers, and the row count. If the newest file is more than ten days old, say so
before mining: an unusually stale tracker is more likely a missed update than a quiet week, and
mining it produces a calendar built on last week's conversations without saying so.

### Step 1 — Mine

Spawn `signal-miner`. The brief carries, explicitly:

- the resolved file id and title, and **how you established it was newest**
- the window: the specific week token for `weekly`, `all` for `backfill`
- the detail fields: `Details` on the conversation-log tab, **and the `Minutes of Meeting` tab**.
  That second tab is where completed meetings are written up rather than cold calls, it is the
  highest-density text in the file, and the first backfill left it unread.
- the scope: housing and homelessness (below)
- the ledger fingerprints, so repeats come back marked rather than rediscovered

Statuses worth weighting: `Follow-up`, `Meeting Set-up`, `Reference Shared` carry conversation.
`Declined` carries a reason, and a repeated reason for declining is among the strongest signals
in the log. Weight, do not exclude.

### Step 2 — Scope

**In scope:** HMIS, Continuum of Care, coordinated entry, shelter and outreach, HUD reporting
(APR, CAPER, LSA), affordable housing, affordable homeownership, housing navigation, and the
county or CoC bodies that run them.

**Out of scope:** disability services, behavioral health, aging services, and general human
services. These are genuinely present in the tracker and are a different audience with different
keywords.

Out-of-scope rows are **counted and characterised in one line** in the calendar. Never dropped
silently. "Fourteen of forty-one rows were disability and behavioral health providers, not mined"
is information Kiki needs, because it distinguishes a thin housing week from a wide log.

### Step 3 — Evidence floor

A signal becomes a candidate topic only if:

- **two or more independent conversations** support it, where independent means different
  organisations, not the same contact across follow-ups, or
- **one conversation states it specifically enough to quote.**

Everything else is a weak signal. It goes in the calendar's watch list with its count and it
waits. A count moving from one to two next week is a trend forming, and that is worth showing.

**Six topics is a ceiling, not a quota.** If four clear the floor, propose four and say the week
was thin. Padding to six is the primary way this skill fails.

### Step 4 — Dedupe

Cheapest first, stop at the first hit:

1. The ledger. Fingerprint match means proposed, approved, rejected or published before. A prior
   rejection with a reason does not come back.
2. The intake board. A `Queued` or `Drafting` item covering it means it is already in flight.
3. **The live site, and not the Drive index.** Read `https://cube84.com/sitemap.xml` and
   `https://cube84.com/blog_sitemap.xml`, then confirm against Search Console via Windsor.
   Verified 2026-08-20: **28 live housing URLs**, 20 pages plus 8 blog posts.
4. `Already existing Blog topics` (`1gjqkEuWL2YKH6tJRyUElkI_AZ1LNh2TcQxelQCLA0JM`) **last, and
   never alone.** It lists roughly 170 posts and **zero housing**, while 28 housing URLs are live.
   Anything trusting it for dedupe will re-propose published work, and on the first live run it
   nearly did. Treat it as a partial index, not a record of what exists.

Published means the angle has to be genuinely new. **A live page with a soft overlap is a rewrite
target, not a blocker.** Say which page, which part is already covered, and which part is not, and
propose the rewrite rather than either a duplicate or a silent drop.

### Step 5 — Route to a bucket

Exactly one bucket per topic, earned.

**SEO / GEO / AEO.** Run `cube84-seo-keywords` for Semrush KD, SERP and question variants. Run
`cube84-seo-geo` for AI Overview presence and passage citability. Run `cube84-seo-performance`
for whether cube84.com already has impressions in striking distance. Optionally
`cube84-seo-competitors` when winnability is genuinely unclear.

**Volume comes from Google, not from Semrush.** They disagree materially and not just in
magnitude: on a higher-ed set Semrush ranked one term above another and Google reversed the
order, 1,300 a month against 70. A calendar sequenced on the wrong ranking fails the same way ad
spend on it does. So pull volume from **Google Ads Keyword Planner through the Windsor
connector** (`get_data`, `connector: "google_ads"`, account `948-200-8076`, fields `keyword`,
`avg_monthly_searches`, `competition_index`, `top_of_page_bid_low`, `top_of_page_bid_high`,
options `keyword_seeds` up to 20, `geo_target_constants: "2840"`, `language: "1000"`). Bids are
in micros, divide by a million. Idea expansion only fires on multi-seed calls, so batch the
week's candidates into one pull rather than checking them one at a time.

Semrush stays the authority on **difficulty and the SERP**, which Keyword Planner does not
report. Use each for what it actually knows.

- Every number is measured. **Never estimate a volume or a KD.** If a tool cannot return one,
  the field says `unavailable` and names which tool failed.
- **When Google and Semrush disagree by more than roughly 2x, print both** and say which one the
  decision used. Silently picking the flattering number is how a calendar acquires a fake
  priority order.

#### Known traps in this keyword set

Established live on 2026-08-20 against both tools. Check them before trusting a headline number.

- **HMIS is an ambiguous acronym.** Funeral home and cemetery management software also call
  themselves HMIS. The Keyword Planner expansion returns `hmis funeral home software` and
  `hmis cemetery software` alongside the housing terms, and Google collapses `hmis` and
  `homeless management information system` into one row with identical stats: 22,200 a month,
  competition 2. **That 22,200 is not all housing demand.** Semrush put the same term at 1,000.
  Neither number is usable on its own. Report both, name the ambiguity, and prefer the
  unambiguous long-tail (`homeless management information system software`, 390) when sequencing.
- **`coordinated entry` at 2,900 a month is the largest clean term in the set** and Semrush did
  not surface it. It is the strongest argument for running the Google pull rather than skipping it.
- **`affordable housing software` runs the disagreement backwards**: Semrush 390, Google 90, with
  competition 43 and top-of-page bids from $13 to $97. Low volume, expensive, commercially
  serious. A blog is the wrong instrument for a term somebody is paying $97 a click for.
- **`hmis rfp` returns nothing from either tool.** Zero on Semrush, null on Google. The
  procurement signal is real in the conversations and absent from search, which is precisely the
  case the ebook format exists for.
- **Google reports close variants with identical stats.** Deduplicate on the
  `(volume, competition, bid_low, bid_high)` signature or the totals inflate. Three rows in this
  set share one signature.
- An AI Overview already answering the query is not a kill. It changes the angle toward the
  concrete detail an AI Overview cannot reproduce: a real workflow, a specific number, a named
  constraint.
- **Kill rule:** no measurable volume, no AI Overview, and no GSC impressions means no demand.
  Drop it and record why.

**Thought Leadership.** Spawn `pov-editor` per candidate. It fills the consensus, the holder and
the counter-claim, or it refuses. **Do not override a refusal to balance the split.** A refused
signal can go to the SEO bucket if it is query-shaped, or to the ledger.

Target three and three. Report the actual split. Five SEO and one TL is an honest week; three and
three achieved by promoting a weak thesis is not.

### Step 6 — Assign format

| Format | When | Downstream |
|---|---|---|
| `blog` | Default. The argument fits 1,100 to 1,500 words. | `wrighter` drafts it |
| `whitepaper` | The argument needs data the reader will cite in a funding or board conversation. | **None. Manual.** |
| `ebook` | A practical how-to the reader keeps, like an HMIS RFP requirements guide. | **None. Manual.** |

`wrighter` produces `blog` items and refuses the rest. Every non-blog row is labelled **manual
production, no downstream agent** in the calendar and on the board. Do not let that gap go quiet.

### Step 7 — Assemble and propose

Write the HTML per `references/calendar-template.md` to
`Homeless and Housing/content-calendar-WE-<dd-mm>.html`.

Then the Slack DM to Kiki: numbered, one line per topic, bucket and title and evidence count and
either the keyword with its real volume or the counter-claim, plus the path to the HTML and the
one-line accounting of what was thrown away.

---

## Approval and write-back

Kiki replies with the numbers she wants. Then, and only then:

1. Create one item per approved topic on the private intake board, `Status = Queued`.
2. Append every topic to the ledger: approved ones with the board item id, rejected ones with her
   reason.
3. Append every shipped thesis to the POV spine, so next week's `pov-editor` can see it.

Approval covers that batch and does not carry forward.

### The board

**Live. Created 2026-08-20, do not create it again.**

`Blog Automation Intake Sheet`, board **`18427467231`**, `board_kind: private`, workspace
`9810721` (CUBE84 Marketing), owner Kiki (`72233449`), single group `Queue` (`topics`).
https://cube84-bunch.monday.com/boards/18427467231

| Column | ID | Type |
|---|---|---|
| Topic | `name` | item name |
| Status | `color_mm6d8573` | status: Queued / Drafting / Pushed to staging / Published / Error |
| Type | `color_mm6dmkk2` | status: blog / whitepaper / ebook |
| Bucket | `color_mm6dnftw` | status: SEO-GEO-AEO / Thought Leadership |
| Description | `long_text_mm6djmd1` | long_text |
| Target Audience | `text_mm6detd0` | text |
| Keywords | `text_mm6dyjsr` | text |
| Word Count | `numeric_mm6dyf9c` | numbers |
| Author | `text_mm6dcr5h` | text |
| Category | `text_mm6dtb0v` | text |
| Signal Evidence | `long_text_mm6dgwmd` | long_text, anonymized |
| Volume | `numeric_mm6d10w8` | numbers, Google Keyword Planner |
| KD | `numeric_mm6d3hf0` | numbers, Semrush |
| Publish Week | `date_mm6dsp35` | date |
| CMS Post URL/ID | `text_mm6dte0a` | text |
| Error Notes | `long_text_mm6dcvam` | long_text |

Verified column ids, so nothing has to be rediscovered. Re-read with `get_board_info` before
writing if a column may have been added, per the tool's own precondition.

`Status` labels match Wrighter's state machine exactly.

`Description` is the angle Wrighter works from, so it carries the argument, the persona, and for
TL rows the three slots. A thin description produces a thin blog, and this field is the only
place the reasoning survives.

`Signal Evidence` is anonymized. Pattern, conversation count, week range. No names.

Not `Blog Tracker 2026 & 2025`. That board is team production, 176 items, statuses through SME
review and design and webdev. This one is the upstream idea queue. Getting an approved topic onto
the team board is a manual step somebody takes deliberately.

---

## Failure handling

On any failure, stop and report. Do not retry automatically and do not half-write a batch.

| Failure | Do |
|---|---|
| Tracker not found by pattern | Stop. Say what you searched. Do not fall back to the hardcoded id without saying you did. |
| Tracker read overflows context | Expected. Slice the saved file with python. Never summarise from the first page. |
| Windsor unavailable | Volume cannot be established from Google. Fall back to Semrush volume and **label every figure as a Semrush estimate**, because the two disagree materially. Do not present an estimate as measured. |
| Semrush unavailable | No difficulty and no SERP read. Volume alone cannot tell you whether a term is winnable. Propose the TL bucket only and say the SEO half is pending. |
| GSC unavailable | Note it. Striking distance is a bonus signal, not a gate. |
| Board write fails partway | Say which items landed and which did not. Never re-run a partial batch blind. |
| Fewer than six clear the floor | Not a failure. Propose fewer, say why. |

---

## What this skill never does

- Never writes a keyword volume or difficulty it did not measure.
- Never puts a prospect name, company, email or phone number in the ledger, the POV spine, the
  board, or anything committed to git.
- Never creates a board item before Kiki approves that batch.
- Never publishes anything. `wrighter` pushes a draft, a human hits publish.
- Never writes to the team's Blog Tracker board.
- Never pads a thin week to reach six.

---

## Housekeeping

The skill lives in a deny-by-default repo whose remote is read by a cloud routine. Any edit here
gets committed and pushed to `KiKi-29/kili-memory` in the same breath. An unpushed change is a
second, stale Charlie.
