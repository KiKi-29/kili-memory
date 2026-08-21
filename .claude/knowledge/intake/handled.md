# Handled threads

Every request `scout` has already dealt with. Check before surfacing anything.
Append after each approved batch. Kiki can edit or delete rows by hand.

`outcome` is one of:

| Outcome | Means |
|---|---|
| `row created` | Kili created it, ID in the last column |
| `row existed` | Already on a board, no action |
| `delivered, not owed` | **Finished work arriving for the record.** Not an intake item, never was. Nothing to create, nothing to chase, and it must never be re-raised in a later sweep. |
| `no action needed` | Real request, but nothing to do |
| `skipped by Kiki` | She looked and passed |

`delivered, not owed` exists because there was previously nowhere to put completed work.
The Loop email thread sat in an open block for three weeks being re-litigated every sweep,
purely because every available outcome described what the router did rather than what the
work was.

### Moving something out of this ledger

This file records **decisions already made**. An unanswered question, a live thread, or
anything still waiting on a human is not a ledger entry, it is live work and it belongs in
`../current/open-threads.md`.

**If you remove something from here because it is live work, you must put it INTO
open-threads in the same pass.** Removing it from one file without adding it to the other
drops it out of the system entirely, which is worse than leaving it filed in the wrong
place. A misfiled item still gets found. A deleted one does not.

This happened on 2026-08-19. Two unanswered asks from a Tier 1 prospect, an intro request
and a missing-collateral problem, were correctly judged not to be ledger material and were
removed, and were not written anywhere else. They were recovered, but only because someone
noticed. Move, never just delete.

| Thread ID | Date | Subject | Outcome | Board row |
|---|---|---|---|---|
| `19faa07df5bed44f` | 2026-07-28 | Alumni Engagement web page - For Design | row existed | WebDev `12657776630` Alumini Engagement Web Page, Deployed |
| `19f6bdb71df23d74` | 2026-07-16 | Hamilton Success Story for website | row existed | WebDev `12597093800` CASE STUDY : HAMILTON, Deployed |
| `19fd6bab359069a5` | 2026-08-06 | Blog Design Request - Student Involvement and Alumni Giving | row existed | Blog Tracker `12743425675` "Student involvement predicts alumni giving...", Design Completed |
| `19ffa5f2ff6e7522` | 2026-08-13 | Design Request - Anonymized Advancement Case Story | row created | WebDev `12841087077` CASE STUDY : Anonymized Advancement, BRD Under Review |

---

## Open, caught during the 2026-08-07 build

| Thread ID | Date | Subject | Why it is open |
|---|---|---|---|
| `19f703b3f4303369` | 2026-07-17 | Loop email HTML file | Email asset from Naveena, Mohan and Prabitha looped in. Genre is email, not a page, so no board is obviously right. Confirm with Kiki whether email assets belong on Newsletters at all. |

---

## The 90-day backlog sweep, 2026-08-09

Kiki's brief: *"I am not looking for new work to log. I am looking for work that already
slipped."* Window 2026-05-11 to 2026-08-09. She instructed that the ledger **not** be used
for detection on this run, because it would hide exactly what she was hunting for.

**Result: Alumni Engagement was the only page that shipped without a brief.** No second
case. Recorded here so a later sweep does not re-open a closed hunt.

### Alumni Engagement, resolved and closed

The page is correct in production as of 2026-08-09, verified by direct fetch, not inferred:

- `/industries/higher-education/alumini-engagement-solution` returns **308** to
  `/industries/higher-education/alumni-engagement-solution`. Permanent, so it does the job
  of the 301 that was asked for.
- Canonical self-references the correctly spelled URL.
- Title and meta description match the values approved on 2026-08-03 character for
  character.
- `robots` is `index, follow`. Present in the en, uk and ca sitemaps under the correct
  spelling; the misspelling appears in **no** sitemap.
- `/industries/higher-education` links to the correct URL.

All three fixes Kiki asked Shashank for on 2026-08-05 were done. Nobody replied to her
update, which is why it looked open. **The work was finished, the reply was not.**

### The methodological lesson, which cost two false alarms

Raw HTML on cube84.com **understates** what a listing page contains. Two defects were
reported to Kili from `curl` output and both were wrong:

- "The case studies listing shows only 3 of 72." False. Rendered in a real browser it
  shows 66 across 8 numbered pages.
- "All blog category pages are empty dead ends." False. They render 6 posts a page with
  working pagination.

The listings hydrate from `api.cube84.com/resources/...`. The `/getdata` paths named in
`robots.txt` are dead legacy routes that return the app shell. **Never conclude a page is
broken from `curl` or from `WebFetch`'s markdown conversion.** `WebFetch` also silently
drops `<link rel="canonical">` and `<meta name="description">`, so it cannot answer a
canonical or meta question at all. Fetch headers with `curl -I` for status and redirects,
and drive a real headless browser for anything a user sees.

### Still open after the sweep, all verified

| What | Where | State |
|---|---|---|
| The BRD gate | thread `19dfe6157930f3c5`, msg `19e0169656badb24` | Surendra asked 2026-05-07 that new page BRDs be standard. Never answered. See the BRD gate section in `routing.md`. |
| Blog "No Result found" | thread `19f374b1a3ddd0cb` | Sakshi reported it, dev closed it as a slow connection, she pushed back 2026-07-22, silent since. The dev explanation is **provably wrong**: the blog hub has no client-side fetch, so client bandwidth cannot cause it. `api.cube84.com` returns HTTP 200 with `{"success":false}` on failure and the frontend only checks `blogs.length`, so an upstream blip during SSR paints "No Result found" to any user. Note the casing: lowercase f, so a search for "No Result Found" misses it. |
| Four orphaned case studies | `/salesforce-case-studies` | Live, indexable, in the sitemap, and served by no page of the listing API: `hamilton-college-experience-cloud-alumni-portal`, `everfi-salesforce-carve-out-migration`, `national-diaper-bank-network-nonprofit-cloud-implementation`, `downtown-dallas-inc-homeless-outreach`. Drift is one-directional, no API record is missing from the sitemap. |
| Soft 404s | site-wide | `/salesforce-case-studies/<anything>` returns 200 with an indexable self-canonical shell. `/blog?page=48` returns 200. `/resources/blogs` 308s to `/resources/blog`, which is a 404 page served as 200. |
| Alumni content gap | thread `19faa07df5bed44f` | Siva flagged 2026-07-29 that the copy omits the portal and app capabilities and the Facebook-like social experience. No reply. The page shipped on 2026-08-04 without it. |
| SOP ask | thread `19faa07df5bed44f` | Neethi asked Kiki 2026-07-29 to "initiate the SOP and let us know whom to coordinate with". No reply in thread. |
| D360 FSA, two dead questions | thread `19ea68818b9d2514` | Nandini asked 2026-06-09 for a demo video with voiceover, after already following up once. Sridhar asked Mythri the same day where the patrol-checkpoint screenshots came from. Neither answered. |
| Video edit request | thread `19fccbdd83934d04` | Neethi asked 2026-08-04 "will this be plugged to a Monday board?". Never answered, and no row exists. `routing.md` has no genre for video. |

### The queue behind Alumni

Per the Higher Ed roadmap, Advancement, Corporate Engagement and Complete Constituent
follow Alumni. As of 2026-08-09:

- **Advancement** and **Complete Constituent**: no trace in Gmail or on any monday board.
  Not started.
- **Corporate Engagement**: already moving on the design team's Daily Tracker, invisible to
  WebDev and with no BRD. See the note on Daily Tracker in `routing.md`. This is the one
  positioned to repeat the Alumni failure.

**Superseded on 2026-08-19. Do not act on the three bullets above.** Corporate Engagement,
Advancement and Complete Constituent are now one live thread owned by
`../current/open-threads.md`, section "Higher Ed addendum, waiting on Prabitha". Kiki
decided to wait for Prabitha's go-live dates rather than chase for them. The paragraphs
above are kept as the 2026-08-09 record of how the risk was first spotted, not as a current
state. Read `open-threads.md` for the current state, and do not re-raise the chase.

Three WebDev rows created 2026-05-27 by form automation are **stale, not stalled**:
`12113645539` Higher Ed industry main page, `12113686146` Product page student engagement
solution, `12113734799` eBook student success program. All read `Not Yet Started`, but the
Higher Ed and student engagement pages both return 200 live. Kiki confirmed the MVPs were
live on 2026-06-04 in thread `19d86615f585aa4d`. Cleanup, not work.

---

## How humans do this today

The Blog Tracker row for the 6 Aug blog has its **Doc Link set to the Gmail thread URL**:
`https://mail.google.com/mail/u/0/#inbox/19fd6bab359069a5`

Somebody read that email and hand-built the row from it, pasting the thread back in as
the source of truth. Roughly 22 hours after the email landed. That is this agent's job,
done manually.

Two things follow, both now baked into the dupe-check order in `routing.md`:

1. A Gmail thread URL in a link column is a handled marker.
2. Match on the artifact, never on the wording. Titles get rewritten between the email
   and the board.

---

## Closed by Kiki, 2026-08-10. Do not re-raise.

### LevelShift, both open questions, closed in one conversation

Recorded as **one entry on purpose**, because they were one thing and were tracked as two.

| Tracked as | Actually |
|---|---|
| "Why is there an NDA already? Kiki is calling Sunil." | Same conversation |
| "Is 'no Gchat convos' LevelShift-only or a general rule?" | Same conversation |

**Both closed.** Kiki spoke to Sunil, looped him in, and the email is sent. Her words:
"Spoke to him. Looped him. Email sent," and on the Gchat scope, "Same as NDA."

So the LevelShift NDA is no longer parked and no longer owed. Merlin Shibily is handled.
Neither question should appear in a sweep again.

**The lesson, and it is the important part.** These sat in the ledger as two unrelated open
items for a day. They were never two things. Both concerned one entity, LevelShift, and one
decision, how a competitor-turned-vendor gets handled, so they were always going to resolve
together. Nothing in the record connected them, so nothing could have spotted it.

Kiki's observation: "Sunil NDA, Levelshift gchat both are same... I wish Kili can connect
such dots."

**Rule from it: open items must carry the entity they concern, and before reporting, group
by entity and ask whether two open questions are actually one.** Two items sharing a
subject usually share a resolution.

### The LevelShift Salesforce lead owner

Lead `00Qfw00000ZThwgEAD`, LevelShift. **Kiki is changing the owner to herself by hand. Do not flag
the owner as wrong.** Filed here 2026-08-22, moved out of the routine prompts where it had been
hand-carried since 2026-08-10. It was the only one of six hand-carried items not already in this
ledger.

### Vendor threads

Kiki approved the rule that vendor and partner threads stay off-board deliberately. Written
into `routing.md`. Do not surface BD Vault or LevelShift as unlogged work.

---

## Parked by Kiki, do not re-raise

| What | Date raised | Decision |
|---|---|---|
| Nandini's D360 FSA demo video with voiceover request | 2026-06-09 | **Parked 2026-08-09. Not being actioned.** Kiki's words: "park it in shelf. We are not going to touch it." Do not surface it in a future sweep. |
| Levelshift call recording, Drive transcript and Read.ai summary | 2026-08-10 | **Kiki's explicit decision: leave all three in place, and keep recording on for future Levelshift calls.** Kili raised it as competitor exposure and she declined. Her words: "I met with Levelshift today. So, tha is okay." Read alongside "All Levelshift notes and activity should go to salesforce", the instinct is that this relationship gets recorded rather than hidden. Do not re-raise. |

---

## The 2026-08-19 sweep

Window 2026-08-10 to 2026-08-19, picking up where this ledger's last activity ended.
Three real requests, one of which was already delivered.

### Approved and created

Kiki's words, 2026-08-19: *"Anonymized case study - yes. Do it. Put it ont he monday board. Tag Shashank and Sayli."*

WebDev `12841087077` **CASE STUDY : Anonymized Advancement**, group New Requests, status
`BRD Under Review`, Task Intake Date 2026-08-13, owners Shashank Tripathi and Sayli
Rajguru. Update `5472877788` carries the anonymization warning and the two blockers, the
Figma that arrived as anchor text reading "Link" with no URL behind it, and the absent slug
and SEO metadata.

**The pattern worth carrying forward, which is the reason this is written down.** A story
is not anonymous because it is labelled anonymized. On 2026-08-10 the Private Research
University story went live carrying a named quote attribution with a job title and needed a
post-publication edit to strip it. Nine days later the next anonymized story arrived with
nobody having signed off that it is de-identified. Same requester, same approver, same
document type. **So for any story described as anonymized, treat de-identification sign off
as a blocking input, quote attributions included, and ask for it before the build rather
than after.**

When citing that precedent, cite the page, never the stripped name. Putting the removed
name on a shared board to explain why names must not appear defeats the point.

### Not a duplicate, and deliberately not linked

`12801505088` "Anonymized Advancement Case Story" sits on Daily Tracker `8820743652`. That
is the design side of the same work, not a twin of the WebDev row. It was left unlinked for
two reasons. `board_relation_mkv5yf8e` does not accept that board, and more importantly
linking it would surface a design-internal board onto a board the whole team reads. See
`../people/working-with-teams.md`. Do not join these two.

### Delivered, nothing owed

| Thread ID | Date | Subject | Outcome |
|---|---|---|---|
| `19feac99b285738a` | 2026-08-10 | Quick Edit Required: Case Study Page | `delivered, not owed`. WebDev `12759647801`, shipped the same day it was raised, `Deployed`. Verified live on 2026-08-19: the name and job title are gone, the quote remains. |

### Open. Nobody has approved these. Ask once, do not re-litigate.

| What | State on 2026-08-19 |
|---|---|
| San Diego parks reservation video and one pager | Kathryn McKissick assigned it to Mohan Kumar Srinivasan on 2026-08-18, thread `1a01578de4731e29`. Tier 1 D360 prospect. `routing.md` has no genre for video. Two D360 boards can hold it, both quiet since spring: Collaterals `9765165683`, which already carries `Short video` and `One pager` as Type of Content and is organised by module, and Ad-hoc Requests `9604419366`, which links to WebDev and has held YouTube video work. Recommendation given to Kiki was Collaterals. Awaiting her. |
| Corporate Engagement, Advancement, Complete Constituent | **Not tracked here. Live work, owned by `../current/open-threads.md`, section "Higher Ed addendum, waiting on Prabitha".** Kiki decided on 2026-08-19 to wait for Prabitha's go-live dates rather than chase for them. Read that file for the current state. Do not restate its contents in this ledger and do not re-raise the chase, that question is closed. |
| D360 collateral inventory, verified 2026-08-19 | Collaterals `9765165683` holds 29 items across 8 module groups, dormant since 2026-05-04. **13 published one pagers** exist: Board Management, User Activity Badges, Geofence Metrics Display, Google Business Insights, Property Insights (2), Field Services App (2), Membership Module, Tenant Lease Expiration, OOB Reports, Enhanced Map Experience, Business Profile Review and Sync. **None covers parks, facility booking or reservations.** An earlier count of seven was wrong, it omitted the per-module one pagers and counted only the group named One-Pagers. Useful whenever anyone asks what D360 collateral already exists. |
| `.gitignore` excludes the BRD reference files | `/.claude/skills/*` admits only `kili/`, so `conventions.md`, `page-types.md`, `house-template.md` and `corpus-index.md` are untracked, while `agents/brd-agent.md` is tracked and instructs loading all four on every run. A scheduled cloud run therefore has no house conventions. Recommendation: admit the first three, keep `corpus-index.md` out because its excluded-BRD section names eight clients. Awaiting Kiki. |

### A column `routing.md` does not document

WebDev `9189704731` carries `link_mm62rrdp`, **Gmail Thread Links**, type link. It is the
purpose-built handled marker on that board, populated in the format
`Gmail thread: <subject> - <url>`, and it is absent from the dupe-check table in
`routing.md`. Search it first, ahead of the columns listed there.
