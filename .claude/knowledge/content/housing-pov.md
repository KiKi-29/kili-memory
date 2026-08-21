# The POV spine: Homelessness and Housing

What CUBE84 argues in this market. `pov-editor` reads this before writing any thesis, and every
thesis that ships gets appended.

Two purposes. It stops week 6 re-arguing week 2 in different words, and it stops week 6 quietly
contradicting week 2, which is worse and harder to notice.

---

## Standing positions

These are not theses. They are the frame every thesis sits inside. Both are drawn from
`../audiences/housing-homeless.md` and from the topics already queued for drafting.

### 1. HMIS tracks numbers for HUD. Salesforce helps staff actually do the care work.

Two different jobs. HMIS exists because HUD requires a database and requires reports out of it.
The daily work of moving one person from crisis to stability is a different job with different
shape: tasks, follow-ups, referral chasing, document expiry, field access, continuity when staff
turn over.

Treating them as one job is the root of most of the pain in this sector, and it is why the honest
answer to "we already have HMIS" is not "ours is better."

### 2. Built to Report, Not to Run.

Most platforms in this sector were architected to produce HUD's required reports, with the
operational workflow retrofitted on top. That single architectural fact explains symptoms that
look unrelated to each other:

- data quality problems surfacing at audit time rather than at entry time
- case managers re-entering the same client information across intake, referral and assessment
- annual assessment scrambles and APR data-quality flags
- entire teams stopping client work during reporting cycles to fix data

A thesis that traces a symptom back to this cause is doing the work. A thesis that just restates
the cause with new nouns is repetition, and `pov-editor` should say so.

---

## Approved, not yet written

### An RFP Written From the Data Standards Can Only Buy a Database
Board item `12856969035` · approved 2026-08-21

**Consensus:** an HMIS procurement is a compliance purchase, so specify conformance with HUD's
Data Standards and let vendors answer against them.
**Who holds it:** CoC lead agencies and county procurement offices who issue HMIS RFPs, and the
HUD TA community whose templates they work from.
**What we say instead:** an RFP written from the data standards can only buy a database, because
the standards describe what must be reported and say nothing about the work that produces the data.

**Verified, not assumed.** A published county HMIS RFP covering 39 agencies and ~329 users has 10
of its 11 software requirements about reporting. "Case management": zero occurrences. "Workflow":
zero. "Coordinated entry": zero. The technical specification appendix is two links, to the Data
Standards Manual and the Data Dictionary.

**Strongest counter-argument:** a procurement officer can fairly say an RFP is not a design
document, and specifying workflow narrows the field toward whoever already builds that way. The
answer is that a requirement can be an outcome rather than an architecture — "demonstrate a case
manager completing intake, referral and assessment without leaving the system" is vendor-neutral,
testable, and no reporting-first product passes it.

**Relationship to the spine:** extends the shipped webinar thesis from the product to the
procurement. The webinar argued the systems were built that way; this argues the buyers are
specifying them that way, which is the mechanism keeping it true.

### The Agreement You Already Signed Decides This, Not the Next CoC Meeting
Board item `12856985774` · approved 2026-08-21 · **GATED, do not write**

Consensus verified (24 CFR 578.7(b) does place HMIS authority with the CoC). The load-bearing
half is not: nobody has counted exclusivity clauses across published CoC participation agreements.
**Gate: count 15-20 of them. If most do forbid an adjacent operational system, kill the thesis
rather than soften it.**

**It also introduces a second root cause,** governance sequence rather than architecture. Two root
causes can both be true, but a publication arguing both without reconciling them reads as having no
position. **Kiki decides whether governance is a sibling thesis or a subordinate mechanism before
this gets written.** That is an editorial call, not a writer's call.

---

## Refused, and why the refusals matter

`pov-editor` refused two candidates on this run. Both refusals were correct and neither should be
revived without new evidence.

- **Contract timing** (`incumbent-multiyear-contract`, 7 orgs at the time). No defended opposing
  view: HUD's own guidance already advises 12-24 month terms and notes 30-day cancellation clauses
  are common. Arguing it would have been arguing with nobody.
- **"We already have HMIS"** (`existing-hmis-is-fine`, 16 orgs). Restates the shipped anchor from
  the demand side, and 11 of the 16 refused to engage at all, so the consensus would have had to be
  invented rather than observed.

The second one is the instructive refusal: **16 organisations is the largest count in the ledger and
it still did not earn a thesis.** Volume of evidence is not the test. A defensible opposing view is.

---

## What this audience will not read

Not style preferences. These are read as signals to stop reading.

- Salesforce, Apex, LWC, platform, developer, technical capacity, staffing solution
- "streamline", "holistic", "end-to-end solution"
- Features before pain
- Growth or ROI framing. Success in this sector is not surplus, it is not losing money already
  earned. Funding continuity, audit confidence and staff capacity are the currency.

**A budget objection here is usually compliance uncertainty wearing a costume.** A thesis that
takes "we don't have budget" at face value has misread the sentence.

---

## Shipped theses

Appended on approval. Newest first. Each entry: date, title, the three slots, the strongest
counter-argument, and its relationship to the spine.

### 2026-06-25 · Most Housing Systems Were Built to Report. Not to Run.
`/webinar/housing-hmis-built-to-report-not-to-run` · live, verified against the page 2026-08-20

**Standing position 2 has already shipped, under its own name, as a webinar.** The page headline
states the thesis verbatim and the body argues that housing and HMIS systems are engineered to
satisfy regulatory documentation rather than to support the daily work of case managers, program
directors and housing authorities, then offers a system "built for the work, not just the
compliance".

This entry exists because the file previously said *"None yet"*, which was wrong, and every
sequencing decision made on "the anchor has not shipped" was therefore made on a false premise.
The ground is claimed. A new thesis must **extend** it or argue something else. Restating it in
blog form is the repetition failure, and `pov-editor` should say so.

The lesson, and it is the artifact-authority primitive: **a POV spine written without reading the
live site is a guess about what has been argued.** Check the sitemap before claiming ground is
unclaimed.

---

## In flight, queued before Charlie existed

Three topics sit queued for drafting from before this system was built. Recorded so `pov-editor`
does not treat their arguments as unclaimed ground.

| Topic | The argument | Bucket it would be |
|---|---|---|
| HMIS Reporting & HUD Compliance: What CoC Programs Need to Know | HUD compliance is a system design problem, not a checklist problem | SEO |
| Coordinated Entry Systems: Streamlining Case Management | Disconnected intake, referral and reporting tools cost real case-manager time | SEO |
| Why Your HMIS Compliance Problem and Your Coordinated Entry Problem Are the Same Problem | Both trace to platforms architected report-first, workflow-second. Explicitly cites *Built to Report, Not to Run*. | Thought Leadership |

The third is the strongest existing statement of standing position 2. Treat it as the anchor
piece, and build outward from it rather than restating it.
