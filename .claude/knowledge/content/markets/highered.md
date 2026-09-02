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
| Wrighter drafts folder | **Not created yet.** No Higher Ed folder exists in Blog Drive `0ALgcD68qBHPzUk9PVA`. Until one does, Wrighter cannot deliver here — say so rather than writing into the housing folder. |
| Default CMS category | **Unresolved.** `Nonprofit` is the housing one. Call `list_blog_categories` and do not guess. |
| Default SME | **Unresolved.** Kiki fills the `SME` column by hand; no agent writes to it. |

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
| **The Semrush API caps at 1,000 rows** | It truncated the Student Engagement set, so 45,780/mo is a **floor**, not a total. The UI export runs to 10,000+. Manual export spec: `Higher Ed/Keyword_Research/_SEMRUSH_DOWNLOAD_SPEC.md`. |
| **No higher-ed keyword has ever produced a real lead** | Across 434 paid rows, not one alumni, advancement or "higher education" keyword. The two paid wins in 19 months both came on *staffing* intent. |

**Research already done — do not re-derive.** Alumni Engagement is complete (267 keywords /
7,820 a month). Student Engagement is truncated. The other four have none.
Files live in `Higher Ed/Keyword_Research/`.

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
