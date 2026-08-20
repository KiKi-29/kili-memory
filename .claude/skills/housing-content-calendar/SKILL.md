---
name: housing-content-calendar
description: >
  Charlie's weekly pipeline. Turns the outbound team's conversation tracker into an
  evidence-backed content calendar for the Homelessness and Housing market, routing every topic
  to either the SEO/GEO/AEO bucket or the Thought Leadership bucket, producing a branded HTML
  calendar, and writing approved topics to the private intake board for blog-publisher to draft.
  Use when the user says content calendar, housing content plan, what should we write about,
  mine the conversation tracker, run Charlie, or asks what the outbound conversations are telling
  us to publish. This is Agent 1 of the CUBE84 content system.
---

# Housing Content Calendar

Agent 1 of CUBE84's content system, and Charlie's entry point.

- **Agent 1, this skill:** mines the outbound tracker, produces topics, gets them approved,
  queues them.
- **Agent 2, `blog-publisher`:** writes each queued blog row and pushes a CMS draft.
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
| Tracker, current file | `1ZnXHAP0r0pUCNTunzepjuJnM7SAyJ_S-oDsBvulzgxI` (`WE 14-08`, 243 rows, 14 weeks) |
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
- the detail field: `Details`
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
3. `Already existing Blog topics`. Published means the angle has to be genuinely new, and if it
   is, say what changed rather than presenting a rewrite as a new topic.

### Step 5 — Route to a bucket

Exactly one bucket per topic, earned.

**SEO / GEO / AEO.** Run `cube84-seo-keywords` for real Semrush volume, KD and question
variants. Run `cube84-seo-geo` for AI Overview presence and passage citability. Run
`cube84-seo-performance` for whether cube84.com already has impressions in striking distance.
Optionally `cube84-seo-competitors` when winnability is genuinely unclear.

- Every number is measured. **Never estimate a volume or a KD.** If a tool cannot return one,
  the field says `unavailable` and names which tool failed.
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
| `blog` | Default. The argument fits 1,100 to 1,500 words. | `blog-publisher` drafts it |
| `whitepaper` | The argument needs data the reader will cite in a funding or board conversation. | **None. Manual.** |
| `ebook` | A practical how-to the reader keeps, like an HMIS RFP requirements guide. | **None. Manual.** |

Agent 2 processes `type=blog` and skips the rest. Every non-blog row is labelled **manual
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

Create once if absent: `board_kind: private`, workspace `9810721`, name
`Blog Automation Intake Sheet`, Kiki as owner. Private so it is hers alone until she invites
somebody.

Columns, the first ten matching what Agent 2 already understands:

`Topic` (item name) · `Description` · `Target Audience` · `Keywords` · `Word Count` ·
`Status` · `Author` · `Category` · `CMS Post URL/ID` · `Error Notes` · `Type` · `Bucket` ·
`Signal Evidence` · `Volume` · `KD` · `Publish Week`

`Status` labels, matching Agent 2's state machine exactly: `Queued`, `Drafting`,
`Pushed to staging`, `Published`, `Error`.

`Description` is the angle Agent 2 writes from, so it carries the argument, the persona, and for
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
| Semrush unavailable | The SEO bucket cannot be validated. Propose the TL bucket only, and say the SEO half is pending. Do not estimate. |
| Windsor or GSC unavailable | Note it. Volume and KD alone still support a decision, striking distance is a bonus. |
| Board write fails partway | Say which items landed and which did not. Never re-run a partial batch blind. |
| Fewer than six clear the floor | Not a failure. Propose fewer, say why. |

---

## What this skill never does

- Never writes a keyword volume or difficulty it did not measure.
- Never puts a prospect name, company, email or phone number in the ledger, the POV spine, the
  board, or anything committed to git.
- Never creates a board item before Kiki approves that batch.
- Never publishes anything. Agent 2 pushes a draft, a human hits publish.
- Never writes to the team's Blog Tracker board.
- Never pads a thin week to reach six.

---

## Housekeeping

The skill lives in a deny-by-default repo whose remote is read by a cloud routine. Any edit here
gets committed and pushed to `KiKi-29/kili-memory` in the same breath. An unpushed change is a
second, stale Charlie.
