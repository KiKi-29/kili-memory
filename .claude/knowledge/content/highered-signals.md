# Signal ledger: Higher Education

Every signal Charlie has mined in this market, and what happened to it. Read before proposing,
written after approval.

Without this, week 4 re-proposes week 3's rejects and Kiki says no to the same topic twice.

**No prospect names, institution names, emails or phone numbers in this file.** It is committed to
a deny-by-default repo whose stated purpose excludes client PII, and it is read by a cloud routine.
Roles and institution types only. This market's sources are unusually dense with real identities —
a booth-lead sheet, a conference debrief, and CRM form fills — so the rule bites harder here than
it does in housing.

---

## The unit is organisations, not rows

Every count below is **distinct organisations**. Three organisations appear in two sources each and
one appears in three; the booth source alone reads 24 conversations against 23 organisation entries
and 28 named individuals. Without the unit recorded, next run cannot tell a real pattern from the
same institution counted four times.

## Status meanings

| Status | Means | Blocks re-proposal? |
|---|---|---|
| `observed` | Seen in the evidence, never put in front of Kiki | No. Eligible, and the history is useful. |
| `proposed` | In a batch she has seen, not yet answered | No, but say it was already shown |
| `approved` | She said yes, item created on the board | Yes |
| `rejected` | She said no. Reason recorded. | **Yes, permanently.** Do not bring it back. |
| `published` | Live on the site | Yes, unless the angle is genuinely new, and say what changed |
| `killed` | Failed the bucket tests, never reached her | Yes for the same angle. A new angle needs a new fingerprint. |

A fingerprint is a kebab-case slug of the **substance**, not the wording. It has to survive being
re-derived next run from different sentences. A fingerprint naming a *mechanism* survives;
one naming a *mood* does not.

---

## Provenance

Established 2026-08-28 by a first `backfill` mine. **There is no higher-ed weekly conversation
tracker.** The Drive folder `Outbound - Higher Ed` holds two contact lists and no call notes, and
the Higher Ed Huddle has produced no record since 2026-06-03. The evidence pool was assembled from
four sources instead:

| Source | Records | In-scope organisations | Minable free text |
|---|--:|--:|--:|
| Conference booth-lead summary, Jun 2026 | 24 conversations / 28 individuals | 23 entries (5 institutions unrecorded) | 20 |
| Conference event notes, raw | 7 paragraphs | +1 new, 3 corroborating | 5 |
| Outbound weekly tracker, WE 05-06 + WE 12-06 | 44 rows | 31 (of 34; 3 out of scope) | **6 rows** |
| Inbound CRM form fills, 2025-2026 | 524 rows -> 20 real | 9 (from 13 records) | 5 messages |

**Distinct higher-ed organisations in the pool: 56-61.** A range, not a point, because five booth
entries record no institution and cannot be de-duplicated against the other three sources.

Accounting: 12 organisations excluded on domain (K-12, a school district, a charter network, a
medical association, human-services nonprofits, a commercial vendor) · 504 bulk-upload CRM rows set
aside on the source's own timestamp-clustering analysis, inherited not re-verified · **35 of 44
outbound tracker rows cut as logistics** · 9 records carried no minable text.

**The outbound tracker is nearly worthless in this market and that must stay written down.** A
34-organisation source contributed **6 organisations** of evidence. The two higher-ed weeks are
conference booth-invitation logistics — "are you attending?", callback requests, slot scheduling —
not product conversations. Do not budget a future run as though those weeks will yield.

**The tracker gained a `Vertical` column** since Charlie was built (log header is now
`Week | Date | Vertical | Prospect Name | Company | Designation | Level | Conversation Status |
Details | Reason`). It is populated on **12 of 241** rows and its only values are
`Homeless & Housing` (7) and `District360` (5). It never says Higher Ed. **Not usable as a scope
selector yet.** If outbound started filling it, higher-ed scoping stops being a week-window
heuristic — worth asking for.

**CUBE84 has 42 live higher-ed URLs** (14 pages + 28 blog posts), verified from
`cube84.com/sitemap.xml` and `blog_sitemap.xml` on 2026-08-28. That is half again as many as
housing's 28. **A conference recap post is already live**, so part of this very evidence pool has
been published — dedupe against the sitemap before proposing anything conference-derived.

**Unread on purpose, and the obvious next read:** an ~11,120-word conference debrief transcript
sits beside the booth summary. It is the verbal source *behind* that summary, covering the same
organisations, so mining it now would inflate counts by re-counting. It is the highest-density free
text in the market and would likely add quotes and context on the three parked leads.

---

## Ledger

All `observed` — nothing has been proposed to Kiki yet.

| # | Fingerprint | Orgs | Sources | Mechanism | Status |
|---|---|--:|---|---|---|
| 1 | `salesforce-owned-elsewhere-student-affairs-cannot-state-status` | 8 | booth, notes | The CRM is owned by IT, enrolment or advancement, so the student-affairs contact cannot scope, price or sponsor work on it | observed |
| 2 | `initial-contact-lacks-purchasing-authority` | 6 | booth, outbound | The practitioner who feels the pain has no budget line; the budget holder is one to three levels up in a different reporting chain | observed |
| 3 | `engagement-app-not-connected-to-crm-or-advising-system` | 5 | booth, inbound | The belonging layer sits outside the system holding the student record, so participation data never reaches the person advising the student | observed |
| 4 | `multi-year-budget-planning-cycle-gates-entry` | 5 | booth, outbound | A planning cycle, not a line item. The term is measured in years, so the question is when the window opens, not whether price can drop | observed |
| 5 | `buyer-routes-to-multi-stakeholder-group-call` | 5 | booth | The buying unit is assembled by the practitioner, not the vendor. Asking for the group is the qualification step | observed |
| 6 | `single-advisor-view-across-sis-lms-cocurricular` | 4 | booth | Staff assemble this view manually today, across three systems, per student | observed |
| 7 | `legacy-sis-integration-sets-the-price-floor` | 4 | booth | The engagement layer must reach a system of record predating the CRM; that integration, not the product, sets the floor price | observed |
| 8 | `trio-first-gen-cohort-programs-as-bounded-buying-unit` | 4 | booth, outbound | Federally-funded programmes report against a bounded roster, so they can adopt a narrow tool without an enterprise decision | observed |
| 9 | `graduate-cohort-unserved-by-undergrad-belonging-model` | 3 | booth | Co-curricular belonging models assume a four-year undergraduate arc; graduate cohorts are short-tenure and terminal, so the participation signals the model needs do not exist | observed |
| 10 | `institutions-enter-via-staffing-gap-on-owned-platform` | 3 | inbound | Institutions own the platform and are short of hands, not software. Demand presents as a capacity gap and the buyer is a functional director, not IT | observed |
| 11 | `incumbent-point-tool-retained-but-does-not-satisfy` | 3 | booth | Dissatisfaction is about permissions and connectivity, not functionality, which is why replacement cycles repeat without resolving anything | observed |
| 12 | `staff-data-access-permission-tiers-gate-adoption` | 2 | booth | Who can see what is a procurement gate, evaluated before functionality | observed |
| 13 | `advancement-demand-arrives-unpaid-no-paid-keyword-coverage` | 2 | inbound | Advancement buyers arrive organic and referral; there is no paid coverage of the terms they would use | observed |
| 14 | `ai-earmark-exists-buy-decision-gates-on-hallucination-control` | 2 | booth, notes | The AI budget exists ahead of the use case; the buy decision turns on a credible grounding-and-guardrails answer, not on capability | observed |
| 15 | `key-person-dependency-strands-student-data` | 2 | booth | Tooling and institutional knowledge sit with individuals; departures strand the data and freeze the process | observed |
| 16 | `success-coaching-function-distinct-from-academic-advising` | 2 | booth, notes | Coaching sits outside the advising org and is measured on persistence, not registration, so advising-tool positioning does not reach it | observed |
| 17 | `branded-search-converts-procurement-verification-not-new-demand` | 2 | inbound | Branded search converts people already inside a procurement process. The blank message is the tell | observed |
| 18 | `residence-life-runs-a-separate-engagement-stack` | 2 | booth, outbound | Residence life buys its own event and engagement tooling on a separate budget | observed |

### Provenance warnings that outrank the counts

- **#8 `trio-first-gen-cohort-programs-as-bounded-buying-unit` is substantially a selection
  artifact.** Three of the four came from an outbound list built by targeting those exact titles.
  Treat as **1 organic organisation plus 3 solicited.** It will not re-derive unless the same list
  is called again. Its mechanism is inferred; nobody stated it.
- **#6 `single-advisor-view-across-sis-lms-cocurricular` is at risk of absorbing #1 and #12.** If
  next run's count lands anywhere between 4 and 12, that is the failure. Split it into the
  *aggregation* need and the *access-tier* need before that happens.
- **#17's blankness is verified; its reading is inference.** Eight free-text fields were confirmed
  empty on a procurement officer's branded-search lead. That the blankness means procurement
  verification is an inference and is labelled as one.
- **#11 must be read against the fact that our student-engagement product is pre-launch with no
  live customers.** No displacement has been proven. Do not write as though it has.

### Vendor concentration (identifiers removed)

- **One advising platform appears at three organisations** in a 61-organisation pool — as the
  installed tool, as a replaced prior generation, and as a contract signed within weeks of the
  conversation. The only vendor in the pool occurring more than once.
- **Every SIS named is one of two products**: two organisations each. Four mentions, two products,
  nothing else.
- **No engagement-app incumbent recurs.** Every one named is a singleton. The advising layer is
  concentrated; the engagement layer is not.

---

## Watch list — below the evidence floor

Counts recorded so a move from one to two is visible next run.

| Fingerprint | Orgs | Why held |
|---|--:|---|
| `wellbeing-signal-tracked-alongside-academics` | 1 | The source asserts strong pull "across many conversations" with **no count behind it**, and it is already named as a roadmap priority on that unquantified basis. One organisation is attributable. Flag upward. |
| `single-win-replicates-across-a-multi-college-system` | 1 | One contact replicates an advising model across colleges. Two other multi-campus organisations are in the pool; neither stated the mechanism. |
| `recently-signed-competing-contract-locks-entry` | 1 | One institution signed with a competing platform and still asked for material. Strong mechanism, single instance. Expect recurrence. |
| `non-us-data-residency-constrains-deployment` | 1 | One organisation raised residency rules. A second non-US organisation raised budget instead — different mechanism, not combinable. |
| `grant-funded-role-scopes-the-budget` | 1 | One grant-funded coordinator; the scope question was never asked. |
| `advising-ratio-is-the-framing-metric` | 1 | One clean ratio (~1:30). A second mention exists but the source flags that text as garbled, so it was not counted. |
| `international-students-under-financial-strain-disengage` | 1 | Vivid and specific, but single-organisation and entangled with #9. |

---

## Deal-shape evidence (not from conversations)

Salesforce carries **no minable narrative** in this market — `Opportunity.Description` is null on 9
of 10 Closed Lost sampled, and the field cannot be filtered in SOQL. It is a deal-shape source, not
a `signal-miner` source. What it shows, pulled 2026-08-28:

- 69 Closed Won / $1,822,930 · 39 Closed Lost / $990,998 · 12 open / $490,900.
- **75% of all Closed Won sits in two accounts** — a private liberal arts college ($784,950 across
  6 opportunities) and a private research university ($576,995 across 30) — and **both are
  alumni/advancement**, not student engagement.
- **Zero student-engagement wins.** The product is pre-launch. The outbound motion and the entire
  conference investment aim at student engagement; the revenue is alumni/advancement work and
  Salesforce capacity.
- **~$332K of that total is predicate false positives.** The higher-ed predicate's `%univers%`
  wildcard catches District360 business-improvement-district accounts, and `%institute%` /
  `%academ%` catch nonprofits. Seven accounts. Subtract before quoting the figure externally.
- Use the broad predicate in `higher-ed-dashboard/REFRESH.md`. A bare `Industry = 'Education'`
  returns 58 opportunities against the correct 120.

---

## Run log

**Run 0 — 2026-08-28, backfill.** First mine of the market. Four sources, 56-61 organisations,
18 fingerprints above the floor, 7 held on the watch list, 12 organisations excluded on domain,
35 of 44 outbound rows cut as logistics. Nothing proposed to Kiki yet.

Two numbers that did not reconcile and are recorded rather than resolved: the inbound source
disagrees with itself on website form fills (headline says 7, the section lists 10, one of which is
flagged a duplicate of another — the organisation count of 5 does not depend on it, the channel
volume does); and the booth source reads 24 conversations against 23 organisation entries and 28
individuals, which reconciles only if three multi-person conversations count as one each.
