# Market profile: Higher Education

Everything about this market that Charlie, `pov-editor` and Wrighter would otherwise hardcode.
One file, so a second market never means a second copy of the pipeline.

Sibling: `markets/housing.md`. Load exactly one per run. **The market is always named by the
caller** — there is no default, because a silent default runs the wrong market's knowledge and
produces confident, on-brand, wrong output.

---

## Identity

| | |
|---|---|
| Market name | Higher Education |
| Short slug | `highered` |
| POV spine | `.claude/knowledge/content/highered-pov.md` |
| Signal ledger | `.claude/knowledge/content/highered-signals.md` |
| Audience | `.claude/knowledge/audiences/higher-ed.md` |
| Calendar output | `Higher Ed/content-calendar-<yyyy-mm-dd>.html` |
| Wrighter drafts folder | **Blog Drive / Higher Ed, `1OCXFfWMEh_IqCg_sCWmMXecQls8CzhRG`.** Created 2026-09-02. **Address it by id, never by name** — several other folders called `Higher Ed` and `Higher Education` exist elsewhere in Drive (under `Higher Ed Strategy`, under a nonprofit emailer folder, and more), and a name search files the work where nobody looks for it. Same trap the housing folder has. |
| Default CMS category | **`Education`.** Confirmed against `list_blog_categories` on 2026-09-02 — it is a real active category, not a guess. (`Nonprofit` is the housing one.) `Experience Cloud`, `Marketing Cloud` and `AI` also exist and may fit a specific piece better; the field takes an array, so a second category is allowed. |
| Default SME | **`prabitha@cube84.com`.** Named by Kiki 2026-09-02. Address verified in Gmail — she is the sender on many threads and there is exactly one Prabitha at CUBE84, so this is confirmed rather than resolved from a first name. **The board's `SME` column is still Kiki's to fill by hand; no agent writes to it.** This entry tells you whose review to expect, not permission to write the field. |

## The offerings. Settled 2026-08-30 by Kiki. Do not re-question.

| Offering | Product name | State |
|---|---|---|
| Student Engagement | **Loop** | Live |
| Alumni Engagement | **Alma** | Live |
| Advancement | — | Roadmap. Page 404s, no BRD. |
| Corporate Engagement | **Folio** | Roadmap. Page 404s, no BRD. Design active since 17 Jul. |
| Complete Constituent | — | Roadmap. Page 404s, no BRD. |
| Education Cloud & Higher Ed CRM | — | Secondary bucket: buyers arriving through Salesforce platform terms rather than one of our products. |

**Folio is Corporate Engagement.** The name appears nowhere in the repo, on cube84.com, or in any
BRD — every internal record says "Corporate Engagement". Do not go looking for it and do not
re-open the question.

**One thing genuinely unresolved:** whether Corporate Engagement means *universities engaging
corporate partners* or *companies engaging their own former employees*. Different markets, almost
no keyword overlap. **Ask before pulling keywords or proposing topics for it.**

**Loop and Alma are pre-launch as products with no live customers.** Never write as though a
displacement has been proven or a customer exists.

---

## Scope

**In scope.** Student engagement and success, alumni engagement, advancement and fundraising,
corporate engagement, constituent management, and the Salesforce platform layer underneath them —
Education Cloud, Experience Cloud, Marketing Cloud, Data Cloud and Agentforce as they are bought
by an institution. Institution types: universities, colleges, community colleges and their
systems.

**Out of scope.** K-12 schools and districts, charter networks, professional and medical
associations, out-of-school-time and education-adjacent nonprofits, and commercial edtech vendors.
All of these appear in the sources and all of them look like higher ed at a glance. **12
organisations were excluded on this line in the first mine** — count what you set aside and say
so, rather than dropping it silently.

**Admissions and enrolment are deliberately out of the paid and content motion**, per the recorded
2026-03-31 decision. Slate owns the admissions word — only 0.7% of demand survives adding
"salesforce" to an admissions term.

---

## Evidence sources

**There is no weekly conversation tracker for this market and probably never will be.** The
`Outbound - Higher Ed` Drive folder (`1u6fTtNWSKJ8XRK_PlltPkZJ1GOKAfkKZ`) holds two contact lists
and no call notes. The Higher Ed Huddle has produced no record since 2026-06-03. Do not go
looking; this is settled, not untested.

| Source | Where | Worth |
|---|---|---|
| Conference booth summary + event notes | `Higher Ed/NASPA SSHE 2026/` | The densest source. 23 organisations, 20 minable. |
| Conference debrief transcript | same folder, ~11,120 words | **Unread.** The verbal source behind the booth summary — mining it naively re-counts organisations already captured. Highest-density text in the market. |
| Inbound CRM form fills | `Higher Ed/HigherEd_Leads_GoogleAds_Website_2025-2026.md` | 20 real leads of 524 rows. The other 504 are bulk ABM uploads wearing a channel label. |
| Outbound weekly tracker | Drive, title pattern `Weekly Conversations Report` | **Nearly worthless here.** 34 organisations in, 6 out; 35 of 44 rows were booth-invite logistics. Do not budget a run on it. |
| Salesforce | CUBE84 org | Deal shape only. `Opportunity.Description` is null on 9 of 10 Closed Lost and cannot be filtered in SOQL. It will never feed `signal-miner`. |

**The tracker's `Vertical` column** exists but is populated on 12 of 241 rows and its only values
are `Homeless & Housing` and `District360`. It never says Higher Ed. Not a usable scope selector
yet; if outbound starts filling it, this whole section simplifies.

---

## Keyword authority and traps

**Volume from Google Ads Keyword Planner via Windsor**, not Semrush — connector `google_ads`,
account `948-200-8076`, `geo_target_constants: "2840"`, `language: "1000"`. Semrush stays the
authority on difficulty and the SERP. When they disagree by more than roughly 2x, print both and
say which the decision used. **This market is the case that proved the rule.**

| Trap | What it does |
|---|---|
| **Adding "salesforce" destroys demand** | Alumni terms alone: 530/mo. The same terms plus "salesforce": 20/mo. Retention varies by layer — 11.2% at the CRM layer, 3.8% in alumni, 0.7% in admissions. CUBE84 sells at the application layer while being findable only under the platform. |
| **Semrush and Google reverse each other here** | *student engagement platform* against *student success platform* — Semrush had the order backwards. A calendar sequenced on the wrong ranking fails the way ad spend on it does. |
| **Semrush overstates this market by far more than 2x** | The general print-both rule triggers at ~2x. **Measured 2026-09-02, the real divergence runs to 17x**, and four candidates that looked like low-KD wins on Semrush alone died on the Google check. Verify every seed against Keyword Planner before it reaches a calendar. |

**Terms measured and killed 2026-09-02. Do not re-propose without new evidence.**

| Keyword | Semrush | Google KP | Divergence |
|---|--:|--:|--:|
| `crm managed services for higher education` | 70 | **no data** | — |
| `higher education crm software comparison` | 170 | **10** | 17x |
| `salesforce managed services partner` | 260 | **30** | 8.7x |
| `benefits of crm in higher education` | 170 | **20** | 8.5x |

Also null on Google: seven thought-leadership-adjacent seed phrases, and five signal clusters with
no search demand anywhere — AI governance and hallucination control, success coaching, advisor 360
and early alert, SIS integration cost, residence life. **A signal being strong in the ledger does
not mean anyone searches for it.** Those belong in Thought Leadership or nowhere.
| **The Semrush API caps at 1,000 rows** | It truncated the Student Engagement set, so 45,780/mo is a **floor**, not a total. The UI export runs to 10,000+. Manual export spec: `Higher Ed/Keyword_Research/_SEMRUSH_DOWNLOAD_SPEC.md`. |
| **No higher-ed keyword has ever produced a real lead** | Across 434 paid rows, not one alumni, advancement or "higher education" keyword. The two paid wins in 19 months both came on *staffing* intent. |

**Research already done — do not re-derive.** Files live in `Higher Ed/Keyword_Research/`.

> **Superseded 2026-09-02.** This section previously read *"Alumni Engagement is complete. Student
> Engagement is truncated. **The other four have none.**"* That last clause was wrong when written
> and would have had a run commission research that already existed. Corrected below.

| Offering | Research on disk |
|---|---|
| Alumni Engagement | Complete. 267 keywords / 7,820 a month. |
| Student Engagement | Original set truncated by the **1,000-row API cap** (45,780/mo is a floor). An expanded manual set exists dated 2026-08-30 — 5,181 rows plus 1,775 retention rows. |
| Advancement | 10,003 rows, 2026-08-30. |
| Complete Constituent | 10,003 rows, 2026-08-30. |
| Education Cloud & Higher Ed CRM | 198 + 100 rows, 2026-08-30. |
| Corporate Engagement / Folio | None, and none should be pulled — see the gate above. |

**Advancement and Complete Constituent sit exactly at 10,003 rows, which is the UI export ceiling
of 10,000 plus headers.** Like the Student Engagement set, those are **floors, not totals.** Any
figure derived from them is a lower bound and must be reported as one.

### What the raw row counts hide

Verified 2026-09-02 by counting, not estimating. **Do not quote the headline volume of either
file** — most of it is not this market.

- **Advancement: 34,200/mo raw, of which only ~9.3% (3,170/mo) is advancement-profession intent.**
  The rest is academic advising, career services, credentials and course advancement. Even the
  surviving 9% is largely navigational and jobs intent — "office of advancement", "advancement
  services jobs", "director of advancement services". **Advancement holds 75% of Closed Won and
  has essentially no buyer search demand.** That is not a research gap; it is the finding.
- **Complete Constituent: 71,240/mo raw, of which ~0.3% (200/mo) is higher-ed relevant.** The
  questions file is dominated by Dreamforce dates and "how to merge accounts in salesforce". It is
  a generic Salesforce dump, not a higher-ed set.
- **The student-engagement question set (194 questions) is classroom pedagogy** — "what is student
  engagement", "how to keep students engaged". Teacher intent, AI Overview on every one. Out of
  scope. The *platform* term is a different matter: `student engagement platform` at 1,300/mo on
  Google has a genuine higher-ed buyer SERP (Modern Campus, Ready Education, Suitable, campusM,
  Modo Labs, CampusESP), verified 2026-09-02.

---

## Dedupe surfaces

- `https://cube84.com/sitemap.xml` and `https://cube84.com/blog_sitemap.xml`. **42 live higher-ed
  URLs verified 2026-08-28** — 14 pages + 28 blog posts, against housing's 28.
- Search Console via Windsor. The hub page `/industries/higher-education` sits at position 24.9.
  Across all alumni pages: 15,865 impressions and 62 clicks in six months, a 0.39% click rate.
  **We are not starting cold, we are starting seen and passed over.**
- **A recap of the very conference the signal ledger was mined from is already live** at
  `/blog/from-insight-to-impact-what-student-affairs-leaders-were-really-saying-at-naspa-sshe-2026`.

### Plans that already exist. Charlie must not re-propose these.

- **`Higher Ed/Keyword_Research/Alumni_Engagement_Content_Plan.md`** — a complete hand-built SEO
  plan for Alumni Engagement: 10 web pages, 20 blog topics, 5 collaterals, all keyword-anchored
  with volume attached. **It contains zero thought leadership.** Charlie's contribution to Alumni
  is the Thought Leadership bucket, not more SEO topics.
#### Approved by Kiki 2026-09-02 — eleven Alumni blogs, HELD not yet queued

Selected off `Higher Ed Content Plan` and confirmed good to go. **Not on the intake board yet**
— Kiki is still working through the remaining decisions and asked that these be held. Queue them
when she says, `Market = Higher Ed`, `Category = Education`, SME left blank for her to fill.

| # | Topic | Vol/mo |
|---|---|--:|
| 1 | Graduway vs Almabase vs Hivebrite: What Each Is Actually Good At | 60 |
| 2 | Alumni Engagement Platform Alternatives: A Buyer's Shortlist | 40 |
| 3 | Can Ellucian CRM Advance Handle Parent and Alumni Engagement? | 30 |
| 4 | 48 Alumni Engagement Ideas, Sorted by Budget and Team Size | 360 |
| 5 | Alumni Engagement Best Practices: What the Strongest Programs Do Differently | 240 |
| 6 | How to Engage Alumni: 12 Approaches That Work | 220 |
| 7 | How to Engage Alumni on Social Media | 130 |
| 8 | How to Measure Alumni Engagement: The Metrics That Matter | 200 |
| 9 | The Alumni Engagement Survey: Questions, Samples, Benchmarks | 130 |
| 10 | Engaging Young Alumni: Why the First Five Years Decide Everything | 110 |
| 11 | From Engagement to Giving: Connecting Alumni Activity to Donations | 110 |

**Deliberately not selected** from the same plan, so do not treat them as oversights: *Does HubSpot
Track Alumni Engagement*, *How to Build an Alumni Engagement Strategy (with a template)*, *What Is
Alumni Engagement? A Working Definition*, *Virtual Alumni Engagement*, and *Corporate Alumni
Engagement* (which is entangled with the unresolved Folio definition).

**One hazard on item 1.** It names Almabase — a direct competitor ranking page one for
`alumni engagement platform` — while our own product is called Alma. Publishing a comparison that
puts those two names side by side invites the association we would otherwise avoid. The
Almabase-versus-Alma decision is still open; **check it before this one drafts**, not after.

- **The Higher Education Content Engine Tracker** (`1Mv7nUdNmWIN2sru0AJAueQA5v2f0R29I`, owned by
  the BU lead) — the human-run offering-collateral plan across all offerings, with named owners
  and blogs already published and in ideation. **Charlie runs parallel to this, not over it.**
  Read it every run and cross off anything already owned there.

---

## Salesforce predicate

Use the broad predicate from `higher-ed-dashboard/REFRESH.md`. A bare `Industry = 'Education'`
returns 58 opportunities against the true 120.

```sql
Industry = 'Education'
  OR Company LIKE '%univers%' OR Company LIKE '%college%'
  OR Company LIKE '%school%'  OR Company LIKE '%institute%'
  OR Company LIKE '%academ%'
```

**It over-matches by roughly $332K across seven accounts.** `%univers%` catches District360
business-improvement-district accounts; `%institute%` and `%academ%` catch nonprofits. Subtract
before quoting any total externally.
