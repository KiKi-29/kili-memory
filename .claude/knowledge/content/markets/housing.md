# Market profile: Homelessness and Housing

Everything about this market that Charlie, `pov-editor` and Wrighter would otherwise hardcode.
Extracted 2026-09-02 from `housing-content-calendar/SKILL.md` when Higher Ed became market two.
**Nothing here is new.** If this file and the skill ever disagree, the skill's git history wins.

Sibling: `markets/highered.md`. Load exactly one per run, named by the caller.

---

## Identity

| | |
|---|---|
| Market name | Homelessness and Housing |
| Short slug | `housing` |
| POV spine | `.claude/knowledge/content/housing-pov.md` |
| Signal ledger | `.claude/knowledge/content/housing-signals.md` |
| Audience | `.claude/knowledge/audiences/housing-homeless.md` |
| Calendar output | `Homeless and Housing/content-calendar-WE-<dd-mm>.html` |
| Wrighter drafts folder | Blog Drive / Homeless and Housing, **`1aEKbVGydpYi-FtCHFsR7TvBC-NQrzdi2`**. Address by id — two other folders with that exact name exist elsewhere in Drive, under `LinkedIn Articles` and under `GTM - Highperformr.ai`. |
| Default CMS category | `Nonprofit`. Still verify against `list_blog_categories`. |
| Default SME | Kiki fills the `SME` column by hand; no agent writes to it. |

## The product names. Settled 2026-08-24 by Kiki. Do not re-question.

| Name | What it is |
|---|---|
| **Housing360** | The HMIS. Whenever a piece means our HMIS, it means Housing360. |
| **Care360** | Coordinated entry. It also helps with coordinated entry work alongside Housing360. |

**"Homelessness Unified Solution" is retired.** Corroborated externally: HUD's FY 2026 HMIS Vendor
Report Validation list carries CUBE84 / Housing360 / v2.0, APR CSV validated 12 Aug 2026, with no
CAPER CSV entry — a citable competitive gap, since 15 of 19 entries carry both.

---

## Scope

**In scope.** HMIS, Continuum of Care, coordinated entry, shelter and outreach, HUD reporting
(APR, CAPER, LSA), affordable housing, affordable homeownership, housing navigation, and the
county or CoC bodies that run them.

**Out of scope.** Disability services, behavioral health, aging services, and general human
services. These are genuinely present in the tracker and are a different audience with different
keywords. Count what you set aside and say so.

---

## Evidence sources

| Source | Where | Worth |
|---|---|---|
| Outbound weekly tracker | Drive, title pattern `Weekly Conversations Report`, newest `modifiedTime` | **The primary source.** Read the `Details` column on the log tab **and** the Minutes of Meeting tab. |
| Tracker folder | `Outbound 2026`, `1UHJN40J_izxwqZlsidoldTDU3Evb0R24` | |

**Discover the tracker by title pattern, never by id.** The id is stable, the title carries the
week-ending date and changes weekly. A hardcoded id silently reads a stale file forever, which
looks identical to a quiet week. Re-count rows every run and report the figure.

**The row-count trap.** The log tab has 229 data rows (241 as of 2026-08-28). A naive count of
lines beginning `| WE ` returns more, because the pivot tab's week labels are also week tokens.
The pivot's own grand total agrees with neither. Count the log tab's data rows.

**The housing motion starts at WE 19-06.** WE 15-05 to WE 29-05 is intellectual-and-developmental
-disability, behavioral health and CBO case management. **WE 05-06 to WE 12-06 is higher-education
student success** — that window now belongs to `markets/highered.md`, though it proved nearly
worthless there. In `backfill` mode, say this rather than reporting a low in-scope ratio as though
the housing motion underperformed.

---

## Keyword authority and traps

Volume from Google Ads Keyword Planner via Windsor, connector `google_ads`, account
`948-200-8076`. Semrush is the authority on difficulty and the SERP. Disagreements over ~2x: print
both, say which the decision used.

| Trap | What it does |
|---|---|
| **HMIS is an ambiguous acronym** | Funeral home and cemetery management software also call themselves HMIS. Google collapses `hmis` and `homeless management information system` into one row at 22,200/mo — **that is not all housing demand.** Semrush put the same term at 1,000. Report both, name the ambiguity, prefer the unambiguous long tail (`homeless management information system software`, 390). |
| **`coordinated entry` at 2,900/mo is the largest clean term** | Semrush did not surface it at all. |
| **`affordable housing software` runs the disagreement backwards** | Semrush 390, Google 90, competition 43, top-of-page bids $13 to $97. |
| **`hmis rfp` returns nothing from either tool** | |
| **Fourteen terms describing our category return null volume** | Net-new SEO is close to unavailable here. A normal week produces **rewrites of pages that already rank, not new posts** — do not read that as a thin week. |

The one clean commercial term is `hmis software vendors` (5 of 12 commercial results), where
cube84.com already holds position 8.89.

---

## Dedupe surfaces

- `https://cube84.com/sitemap.xml` and `https://cube84.com/blog_sitemap.xml`. **28 live housing
  URLs** — 20 pages + 8 blog posts, verified 2026-08-20.
- Search Console via Windsor: ~223 clicks, 18,165 impressions over 15 months.
- `https://cube84.com/blog` **page 1 only** — the full listing is 47 pages and carries no dates.
- **Never dedupe against the Drive sheet `Already existing Blog topics`.** It lists ~170 posts and
  none of the 28 live housing URLs. It nearly caused a duplicate on the first live run.

Filing is inconsistent: housing content is split between the Blog Drive root and `Nonprofit Blogs`
(`1i3Ra_egJt4MxH5KLn-due4gM6KfE-c_f`).

**The live post pool is eight blog posts**, so on housing work a third internal link is often a
stretch — worth flagging rather than hiding.
