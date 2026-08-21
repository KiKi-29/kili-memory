# The House BRD Skeleton

Two shapes exist in the corpus. Pick by whether the build is a **page** or a **change**.

---

## Shape A — Page build

Used for landing pages, product pages, hubs, customer stories, comparison pages.

```markdown
# BRD: <Page or project name>

**Project:** <name>
**Prepared By:** <author>
**Stakeholders:** Marketing Team (Kiki, Sakshi), Development Team (Surendra, Vedha)

**Design (Figma):** <link>
**Content doc:** <link>
**Meta details sheet:** <link, if one exists>

## Purpose
One paragraph. What this document is the source of truth for, and who it is written for.
"It is written for the web developer and covers everything needed to build, connect,
and launch this page correctly."

## Background
Why this exists now. The event, the campaign, the gap it fills. Keep it to what changes
a build decision.

## Page in Scope
| Page | Type | URL | Status |
|---|---|---|---|

## Navigation and Sitemap
Whether it sits in global nav, how visitors reach it, whether it goes in sitemap.xml.

## SEO Details
| Field | Value |
|---|---|
| Meta Title | |
| Meta Description | |
| URL | |
| H1 | |

## Page Layout
What stays the same, what changes. For clone jobs, list the elements that must not move.

## Content
The actual on-page copy, or a link to it plus who owns it and its status.

## Form Configuration
Form ID, form name, fields table, validation, button label, footer text.

## Form Intent
| Field | Value |
|---|---|
| Intent Type | Low / High |
| Lead Type | |
| Stage | |
| Action | |

## Post Submission
Numbered list of everything that must happen, and the word "simultaneously" if it is
simultaneous. Cover: visitor-facing outcome, data storage, CRM, notification email.

## CRM Integration
Lead creation, field mapping, UTM to Lead Source, the do-not-overwrite rule. Name Mohan.

## Email Notification
From, To, CC, Subject, Body format. As a table where there are many recipients.

## CTA Destinations
| CTA | Destination | Status |
|---|---|---|
Use Status to mark CTAs that stay hidden until a dependent page is live.

## Technical Requirements
Canonical, redirects, alt text, mobile, page speed, tracking, reCAPTCHA, privacy link.

## Design Team Requirements (<names>)
Bulleted, specific.

## Web Development Team Requirements (<names>)
Bulleted, specific.

## Ownership and ETAs
| Deliverable | Owner | ETA |
|---|---|---|

## Open Items
Everything unconfirmed, with who owes it.
```

---

## Shape B — Change request

Used for CMS enhancements, site-wide technical requests, and modifications to a live page.

```markdown
# BRD: <Request name>

**Request:** <one line>
**Owner:** <name>
**Date:**
**Stakeholders:**

## 1. Goal
One sentence. What outcome this produces.

## 2. Background / Why
The incident, the pain, the risk. Bulleted. This section earns the request.

## 3. Current Situation
How it works today, step by step. Do not skip this. The dev team needs the
delta, not the destination.

## 4. What We Need
The change, broken into numbered requirements. Each one specific enough to build.

## 5. How It Should Work
The new behaviour, including edge cases and state transitions.

## After the change: Case 1 / Case 2
Walk both the unchanged path and the new path end to end, so the team can see
nothing existing breaks. The corpus does this well and it prevents regressions.

## Dependencies
What must exist first, and who owns it.

## Related Tasks
Smaller items riding along with this request.

## Expected Outcomes
What success looks like.
```

---

## Task-breakdown variant

When a project splits across teams, the corpus uses a per-task block. Use it when more
than two teams are involved.

```markdown
### TASK <n> — <Action-phrased title>

**Team Responsible:** <team> (<names>)
**<Input> Provided By:** <name>

**Requirement:**
- What must happen, in build terms.

**Expected Output:**
- The observable result, and how it gets tested.
```

---

## Section habits worth copying

- **A Summary table near the top** for clone jobs. Item / Requirement, one row per decision.
  It lets the dev team see the whole change in ten seconds.
- **"Note for the WebDev team:"** as a short callout for the one or two things most likely
  to be got wrong (a table that must reflow on mobile, a button that needs a native share).
- **A TLDR table at the end** for anything with branching logic. Trigger / Email / Recipients.
- **Explicit non-scope.** "The form fields, Salesforce mapping, and submission notifications
  are already handled on the Contact Us page and are not in scope for this BRD."
- **Status columns.** Mark things Visible / Hidden / WIP / Coming Soon rather than leaving
  them out. A hidden CTA is a build instruction.
