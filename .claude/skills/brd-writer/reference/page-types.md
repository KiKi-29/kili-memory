# Page Type Recipes

Each recipe lists the sections that must appear and the decisions that must be nailed down.
Precedent BRDs are named so you can read the real thing in `corpus-index.md`.

---

## 1. Contact-page clone (event QR landing page)

*Precedent: HMIS & HUD Book A Demo · Affordable Housing Contact Us*

The most common request. A new page that reuses the Contact page layout with different copy
and a separate form ID, so event leads can be tracked apart from general enquiries.

**Must include:**
- Reference page to duplicate: `https://cube84.com/contact`
- Summary table (Item / Requirement) covering: page creation, reference layout, form ID,
  visible fields, removed fields, backend handling, CRM integration, email notification
- Page URL, Page Title, Purpose
- **Page Layout** — an explicit list of what stays identical: navigation bar, page layout,
  form styling, contact details section, footer. Then: "Only content and form configuration
  will change."
- Content changes: the new heading, subheading, and CTA button label
- New unique Form ID in snake_case
- Form fields visible / fields removed / **backend field handling** (removed fields pass as
  NULL so CRM mappings stay unchanged)
- CRM integration, email notification with updated subject line
- Form submission confirmation ("Remains the same" is a valid answer)
- **Mobile optimization**, framed around the QR scan experience
- **QR Code Usage** with the numbered expected flow: scan → land → fill → lead to CRM →
  notification sent
- Acceptance Criteria as a checklist

**The decision people forget:** whether a removed field is removed from the layout only, or
removed from CRM too. It is almost always layout only.

---

## 2. Industry or product page

*Precedent: Higher Education Industry Page · District360 Streets Product Page*

Sits in the site structure, usually in global nav, no embedded form.

**Must include:**
- Content doc link, Figma link, SEO metadata spreadsheet link
- Purpose and Background
- **Pages in Scope** table, and an explicit out-of-scope list for future phases
- **Navigation** — where it sits, whether there is a dropdown, exact nav label changes
- Per page: what the page does, content owner, content status and date, CTA destinations table
- **CTA and Form Intent** — if there is no embedded form, say so and say where CTAs route,
  and note that the destination form is out of scope
- **URL and Redirect** — if it replaces a live URL, the redirect must be in place before
  go-live. Name Surendra.
- SEO and Technical: meta details, canonical (call out that it matters more when replacing
  a URL), alt text, mobile, page speed
- **Interlink activation** — which CTA on which parent page turns on when this page goes live,
  and which ones stay hidden
- Ownership and ETAs table

---

## 3. Gated ebook or asset landing page

*Precedent: The Engagement Gap eBook Landing Page*

**Must include:**
- Figma link, asset link (the hosted PDF, usually a `go.pardot.com` URL)
- Purpose: "The page is gated, and visitors must fill out a form to receive the asset in
  their inbox."
- Page in Scope table
- **Sitemap and Navigation** table: page type, navigation (not in global nav), access
  (direct URL or campaign link only), URL structure (flat, sits on the root), reference page
- SEO Details table
- Form Fields table, form footer, button
- Form Intent table: Low intent, Warm lead, Awareness and consideration, "eBook download,
  not a demo request"
- **Post Submission** — three things happening simultaneously:
  1. Asset delivery email from Pardot to the visitor, using the approved template
  2. Form data stored in Pardot
  3. Internal notification email to the team
- Technical Requirements: tracking tag and conversion event, alt text with a named provider,
  mobile, page speed, reCAPTCHA, privacy policy link

**The asset must be hosted and reachable by URL before it goes into Pardot.**

---

## 4. Webinar sign-up landing page

*Precedent: Housing 360 Webinar Sign Up LP · Nonprofit Webinar Sign Up LP*

**Must include:**
- Meta tags block: Title, URL, Meta Description with the webinar date in it
- **UTM parameters** for LinkedIn Ads, Email Campaign, and Organic Social, written out
- Goal, framed for three audiences: design already shared, dev builds and wires, sales
  follows up as soon as leads hit CRM
- CTA button label (e.g. "Save Your Spot") and whether the form is a pop-up
- Form fields with work-email validation
- Thank-you pop-up text, verbatim
- "Form should be mapped to Pardot the same way it was set up for [named previous webinar]"
- Form Intent: low intent
- **Form Submission Flow**, numbered:
  1. Create Lead in CRM (Pardot handles it), UTM to Lead Source mapping, do-not-overwrite
     rule, save to CMS as backup. Note that CRM config is Mohan's.
  2. Internal notification email: From, To, CC, format
  3. Registrant confirmation email: BCC, Subject, full body with date and time in all three
     US time zones
  4. Pop-up thank-you message
- **Notes on Zoom (FYI only, not for Dev)** — marketing adds registrants to Zoom manually,
  Zoom then sends the join link and calendar invites

---

## 5. Resource hub or toolkit

*Precedent: Housing Resource Hub · Nonprofit Toolkit*

Two pages: a gated entry page and a card-based listing page.

**Must include:**
- Overview naming the layout references (Nonprofit Toolkit, Downtown Resource Hub)
- How visitors arrive (QR on conference coasters, campaign link)
- **Landing Page Flow** — entry URL, form fields, low intent, then the post-submit chain:
  stored in website database → internal notification → pushed to Pardot via API → Pardot
  syncs to Salesforce → redirect to the listing page
- Internal notification format: subject, from, primary recipient, CC recipients
- Listing page URL and card-based layout reference
- **Components table**: Resource / Current Status / Format / Why. The "Why" column explains
  the format decision (stays a blog vs converted to PDF vs assessment tool vs video)
- Design Team Requirements, named
- Web Development Team Requirements, named
- **Tracking and Engagement** — track form submissions, resource card clicks, PDF downloads,
  video clicks, each tied back to the name and email from the entry form. Capture: visitor
  name, visitor email, resource name, action type, UTM parameters.
- Per-card content: heading, description, CTA label, destination link
- The note that PDFs must be hosted and reachable before going into Pardot with UTMs

---

## 6. Interactive tool or calculator

*Precedent: Managed Services Cost Calculator · HUD/LIHTC Audit Risk Scorecard ·
Nonprofit Data Risk Assessment*

**Must include:**
- Project Overview: what we are building, in plain terms
- **Why Are We Building This** — the visitor state it serves ("not yet ready to talk to
  sales, but curious and exploring")
- Where it will be used: the exact pages it embeds on, and who each page attracts
- Who it is for
- Subject-matter input, credited to the person who gave it
- Step-by-step user flow
- **The questions table**: Q number / Question with its options / Purpose. State plainly
  which questions drive the result and which are for internal routing only.
- **Result logic table** — the mapping from answer to output, exhaustively
- **What users see on the result page**, including every branch. Cover the "not sure" branch
  and any segment-specific message.
- Disclaimer text, verbatim
- **Email notification flow for all three states**: started, dropped off, completed. Each with
  From, To, Subject, and body. Include quiz responses with options listed and a `Selected:`
  line, plus location and technical details.
- **The sales routing rule**: sales only receives the completed notification
- TLDR table: Trigger / Email / Recipients

---

## 7. Customer story or case study

*Precedent: Customer Stories (6) · Customer Story Template BRD*

**Must include:**
- Overview: what the page does and how it is structured (situation → challenge →
  configuration → impact)
- Goal of the page, bulleted
- Design: the reusable Figma template
- Reference content links per story
- Note to WebDev if several stories share one template
- **Per story**: URL, Meta Title, Meta Description
- CTA Redirections (Schedule A Demo and Start A Conversation both go to Contact Us)
- **More Customer Stories section** — the exact three-way interlink map per story, plus the
  card Title and Sub-Title for each
- Alt text for every image
- **FAQ Schema** — the full JSON-LD `FAQPage` block per story, supplied verbatim

---

## 8. Comparison page

*Precedent: District360 vs Ginkgo · vs PBID Manager · vs Jia · Comparison Listing Page*

**Must include:**
- Overview naming who the page serves: both early-stage researchers and prospects already
  using the competitor
- **Goal of the page**, bulleted, and it should include acknowledging the competitor's real
  strengths before contrasting depth. That is the house approach and it is what makes these
  pages credible.
- Design Figma plus a separate mobile-reference template
- Note for WebDev on tables reflowing on small screens
- Meta Title (and OG Title), Meta Description (and OG Description), URL, H1
- **Table of Contents** behaviour: active section highlights on scroll and on click,
  TOC disappears entirely on mobile
- **FAQ** in two parts: `2.3.1` the JSON-LD schema block, and `2.3.2` the same content as
  plain text so it renders on the page. Both, always.
- Address the "can we run both?" question directly in the FAQ.
- CTA redirections, and keep the Read Now buttons in the "Still weighing your options?"
  section
- Alt text

**For the listing page:** the card-to-page routing table, plus the **Share module** — a modal
with LinkedIn, X, Facebook, Email, and Copy link. Closes on the close icon, on outside click,
and on Esc. Shares the **clean base URL without UTM parameters**, not the visitor's current
URL. Supply the email subject and body, the "Link copied" success text, and the failure text.

---

## 9. CMS or platform change

*Precedent: CMS Enhancements Requirements*

Use Shape B in `house-template.md`. Structure each requirement as:
Current Situation → Current Flow → What We Need → How It Should Work → After the change,
walked through as Case 1 (nothing changes for the existing path) and Case 2 (the new path).

Spell out state transitions. For a scheduler: what the status reads on the listing page, what
the toggle does, what happens if someone changes their mind.

---

## 10. Site-wide technical request

*Precedent: Enable reCAPTCHA on All Website Forms*

Short and blunt. Goal, Background/Why (including the incident that prompted it), Requirements
(numbered, naming every surface it applies to), User Experience constraints, Related Tasks.

Name every place the change lands: Pardot-hosted forms, website forms integrated with Pardot,
Pardot landing pages, custom landing pages with embedded forms.

---

## 12. Sibling solution page, appended to an existing parent BRD

**The most repeatable pattern in the Higher Ed programme, and until Aug 2026 it was
written down nowhere.** That omission is why the Alumni Engagement page shipped with no
brief, a misspelled slug in production, and six technical items nobody confirmed.

**Three more are queued behind it:** Advancement, Corporate Engagement, Complete
Constituent. The parent BRD names all three by name as out of scope for v1, "to be added
to this document when content and scope are confirmed". Use this recipe so they do not
repeat it.

### What it is

A single product or solution page that hangs off an industry parent page. It is **not** a
recipe 2 industry page: there is no multi-page scope, no nav decision, and no URL being
replaced. It inherits almost everything from the parent's BRD.

Live examples: `/industries/higher-education/student-engagement-solution` (Loop) and
`/industries/higher-education/alumni-engagement-solution` (Alma).

### Write it as an addendum, not a standalone

The parent BRD already carries nav, canonical, sitemap, interlink and form-intent rules,
and it already promises these sections. A standalone doc duplicates all of it and drifts.

Parent for Higher Ed:
`https://docs.google.com/document/d/1R_18a4aV441E-hJi0iar-MSBJqBZsl_qV3dB6S1yJxY`

### Inherited from the parent, state and do not re-derive

- **Not in global nav.** Reachable only by interlink from the parent page.
- **Must be in `sitemap.xml`**, precisely because it is interlink-only and otherwise
  undiscoverable.
- **Self-referencing canonical** on its own final URL.
- **No embedded form.** CTAs route out, so form intent is already handled.
- URL pattern `cube84.com/industries/<industry>/<offering>-solution`.

### Required, and specific to this page

| Item | Note |
|---|---|
| Product name | Load-bearing and appears in the meta title. Loop, Alma. Confirm it is the approved public name. |
| Meta title and description | Product name leads. See the pattern note in `conventions.md`. |
| CTA destination | **The gap that bites.** Loop routes to its own demo page, `/higher-education-student-engagement/demo`. If this offering has no demo page, say whether CTAs go to `cube84.com/contact` instead. Never leave it unstated, a meta description ending "Book a demo" with no demo page is a dead end. |
| Content version of record | Content arrives as an HTML attachment and gets revised. Name the version that shipped, and put the file in Drive rather than leaving it in an inbox. |
| Figma, with approval state | A first-draft node approved in an email reads as final to whoever builds from it. Record which node and who approved it. |
| Alt text | Owner named. |

### The step everyone forgets

**Activate the parent's hidden "Learn more" CTA.** The parent BRD keeps one hidden CTA per
planned solution page, and they stay hidden until each page is live. Shipping the page
without switching its link on leaves it live and unreachable.

Name the section, the card, the CTA and the destination explicitly, the way the parent
does for Loop. Put it in the BRD as a go-live task with a named owner, because it is on
a different page from the one being built and is therefore easy to miss.

### Close-out

Because these pages ship fast, add a short close-out list with a named owner per line:
canonical verified, sitemap entry confirmed, parent CTA activated, redirect in place if
the URL changed, meta implemented, mobile signed off.

**Verify these against the live page rather than asking.** All of it is readable in one
fetch. On the Alumni page, six items were chased that turned out to be already correct.
