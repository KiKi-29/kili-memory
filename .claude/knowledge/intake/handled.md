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

| Thread ID | Date | Subject | Outcome | Board row |
|---|---|---|---|---|
| `19faa07df5bed44f` | 2026-07-28 | Alumni Engagement web page - For Design | row existed | WebDev `12657776630` Alumini Engagement Web Page, Deployed |
| `19f6bdb71df23d74` | 2026-07-16 | Hamilton Success Story for website | row existed | WebDev `12597093800` CASE STUDY : HAMILTON, Deployed |
| `19fd6bab359069a5` | 2026-08-06 | Blog Design Request - Student Involvement and Alumni Giving | row existed | Blog Tracker `12743425675` "Student involvement predicts alumni giving...", Design Completed |

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

### Vendor threads

Kiki approved the rule that vendor and partner threads stay off-board deliberately. Written
into `routing.md`. Do not surface BD Vault or LevelShift as unlogged work.

---

## Parked by Kiki, do not re-raise

| What | Date raised | Decision |
|---|---|---|
| Nandini's D360 FSA demo video with voiceover request | 2026-06-09 | **Parked 2026-08-09. Not being actioned.** Kiki's words: "park it in shelf. We are not going to touch it." Do not surface it in a future sweep. |
| Levelshift call recording, Drive transcript and Read.ai summary | 2026-08-10 | **Kiki's explicit decision: leave all three in place, and keep recording on for future Levelshift calls.** Kili raised it as competitor exposure and she declined. Her words: "I met with Levelshift today. So, tha is okay." Read alongside "All Levelshift notes and activity should go to salesforce", the instinct is that this relationship gets recorded rather than hidden. Do not re-raise. |
