# Market profile: Salesforce (core services)

Everything about this market that Charlie, `pov-editor` and Wrighter would otherwise hardcode.
Created 2026-10-20 when Kiki approved writing the Salesforce staffing and managed services cluster.

Siblings: `markets/housing.md`, `markets/highered.md`. Load exactly one per run, named by the
caller. **This market is not Housing or Higher Ed.** A staffing piece that drifts into HMIS or alumni
examples has loaded the wrong profile.

---

## Identity

| | |
|---|---|
| Market name | Salesforce (core services) |
| Short slug | `salesforce` |
| Scope | Staff augmentation, hiring Salesforce talent, managed services, support models, cost and TCO, development partners. Industry-neutral unless the row names an industry. |
| POV spine | None written yet. Until one exists, the standing positions are the published posts listed under *What already exists*. The anchor thesis is Kiki's TCO guide: **Salesforce is budgeted as CapEx but functions as OpEx.** |
| Signal ledger | None. This market has no conversation tracker. Evidence comes from search demand and paid search, listed below. |
| Audience | No audience file yet. Working definition: the person who owns the Salesforce org and its budget at a mid-market company: CRM or RevOps lead, IT or business systems director, and the CFO or COO who signs the staffing decision. Practical, time-poor, burned once by a vendor. Kiki to confirm or replace. |
| Voice model | **`.claude/knowledge/writing/kiki-blog-voice.md`, always.** Kiki wrote the TCO guide and the staff augmentation cost piece herself and holds them up as the standard for this cluster. |
| Wrighter drafts folder | **Blog Drive / Salesforce, `1eDuAtXoX-BdIpRtaykJCe83Se09qVm5G`.** Created 2026-10-20 on the Blog Drive shared drive, beside `Homeless and Housing`. Address it by id, never by name. |
| Default CMS category | From `.claude/knowledge/content/blog-categories.md` (the live site list, Kiki 2026-11-02). Usual picks for this market: `Staff Augmentation`, `Managed Services & Support`, `Salesforce Consulting`, `Salesforce Development`, `Engagement Models`. Settled, never flagged as unverified. |
| Default author | **`CUBE84`**, chosen by Kiki 2026-10-20. Settled; never flag it. |
| Default SME | **None named.** Kiki chose "no SME yet" on 2026-10-20. The `SME` column stays empty until she fills it; an empty SME is not a reason to skip review or to guess a reviewer. Past cited authors on this cluster: Shrey C, Gayathri, Hema. |
| Default word count | 1,200, set by Kiki 2026-10-20 for the staffing and managed services batch. |

## Where demand evidence comes from

| Source | What it gives | How to read it |
|---|---|---|
| Search Console via Windsor, `sc-domain:cube84.com` | Queries we already get impressions for, with position | Striking distance (position 5 to 20) beats net-new. Compute branded splits by hand: Windsor's `branded_vs_nonbranded` mislabels `cube84` as nonbranded. |
| Google Ads via Windsor, account `948-200-8076` | Keyword-level spend and clicks for campaigns `SF Hire`, `SF Development`, `SF Product Services` | Proof a buyer pays for the term. Never use headline conversions as leads (see the Google Ads lead analysis memory). |
| Keyword Planner via Windsor | Volume | Volume comes from Google, not Semrush. |
| Drive sheet `Salesforce Development Keywords` (Jan 2026) | Hire and development keyword research with ad groups | Keyword cells truncate in `read_file_content`; export as CSV to read them whole. |
| Drive sheet `LLM - Content Clusters`, tab `Salesforce Managed Services` | Kiki's planned topic clusters | A plan, not demand evidence. |

## What already exists, so nothing is written twice

Check both before proposing a topic: the team's Blog Tracker (`8422767857`) and the published list
(Drive sheet `ALL BLOGS LIST 2026: Web Scrapping: Working doc - Sakshi`). Published posts in this
cluster as of 2026-10-20 include:

- The Complete Guide to Salesforce Total Cost of Ownership: Framework + Calculator (Kiki)
- How Much Does Salesforce Staff Augmentation Really Cost? (written by Kiki; not on the tracker or the March 2026 published list, so confirm its URL with her before linking it)
- Salesforce Managed Services vs. Staff Augmentation: Which is Right for Your Business?
- Dedicated vs. On-Demand Salesforce Developer: Which Model Is Right For You?
- What's Included in Salesforce Managed Services? A Complete Breakdown
- Where Salesforce Staff Augmentation Services Actually Make Sense (and Where They Don't)
- How to Choose a Good Salesforce Staff Augmentation Services Vendor
- Salesforce Managed Services vs In-House Support / vs In-House Admin
- What Salesforce Certifications Should Your Managed Services Provider Have?
- How to Vet a Salesforce Partner: The 2026 Checklist
- Salesforce Implementation Cost 2026: Hidden Fees & ROI Estimator
- What Is The Difference Between Staff Augmentation And Outsourcing?

Parked on the tracker, finished but unpublished: *Hire Remote Salesforce Developer* (Design
Completed, item 11751946519), *Managed Services Pricing Models* (Design Completed). Read the parked one
before writing anything that overlaps it.

**Corrected 2026-10-20 (Charlie, by opening the live pages):** *Custom Salesforce Development in 2026:
When to Build, When to Buy, and How to Govern What You Ship* is **live** at
`cube84.com/blog/custom-salesforce-development-in-2026-when-to-build-when-to-buy-and-how-to-govern-what-you-ship`,
although the tracker still shows Design Completed. *Why CRM Tools Are Commodities and Strategy Is the
Only Edge in 2026* is not a live title; the live post on that argument is *CRM Strategy vs Tools: What
Actually Drives CRM ROI in 2026* (`cube84.com/blog/crm-strategy-vs-tools-what-actually-drives-crm-roi-in-2026`).
*How Much Does Salesforce Staff Augmentation Really Cost?* is in neither the published sheet nor
`cube84.com/blog_sitemap.xml`. **Trap:** `cube84.com/blog/<any-slug>` returns HTTP 200 with an empty
shell, so a status code does not prove a post exists; check for an H1.

**Who already owns which search terms (Search Console, 20 Jul to 17 Oct 2026):** `salesforce staff
augmentation` (643 impressions, position 8.4) and `salesforce team augmentation` (204, 8.6) go to
*Where Salesforce Staff Augmentation Services Actually Make Sense*. `salesforce scalability` (192, 6.2)
and `salesforce scalable architecture` (54, 7.1) go to the 2025 technical post *Scalability in Salesforce
Development: Preparing for Future Growth*. A new post aimed at those terms competes with our own page.

## Traps

- **Do not invent rates, salaries or market sizes.** This cluster is where invented numbers are most
  tempting (developer rates, staff augmentation cost). The voice model's answer is a method the
  reader can run with their own numbers, plus figures only where a named, openable source gives them.
- **Competitor pages are full of unsourced statistics.** On 2026-10-20 both a Salesforce partner and a
  HubSpot partner were found citing "over 60% of CRM failures are people issues, 6-10% the platform"
  with no primary source. Never carry a figure across from a competitor page.
- **Never name a client or prospect**, even from a public case study, without Kiki's say-so.
