# CUBE84 BRD Standing Conventions

Extracted from the BRD corpus. These are the defaults. Deviate only when the user says so.

---

## People and who does what

| Person | Email | Role in a BRD |
|---|---|---|
| Kiki (Kirithiga Sundaramoorthy) | kirithiga.s@cube84.com | Marketing strategy. Requester or reviewer on most BRDs. |
| Sakshi Singh | sakshi.s@cube84.com | BRD author, marketing and SEO. Provides alt text and meta details. |
| Sayli Rajguru | sayli.r@cube84.com | **Sr. Market Research Analyst.** Content, blogs and customer stories. Originates case study and quick-edit requests. Publishing blogs directly in the CMS since 11 Aug 2026. Surname is **Rajguru**, verified on her monday user record. |
| Abhilaash Jaishankar | — | Strategy and Campaign team. Authors District360 BRDs. |
| Surendra | surendra.v@cube84.com | WebDev. Named for redirects, canonicals, sitemap, meta implementation. |
| Shashank Tripathi | shashank.t@cube84.com | **WebDev, Technical Architect.** Deploys, answers go-live, and is who Kiki escalates URL and routing fixes to. Verified on the Alumni page, Aug 2026. |
| Vedha | vedha.h@cube84.com | WebDev. |
| Mohan | mohan.s@cube84.com | **CRM configuration.** Any Salesforce or Lead Source setup is coordinated with him directly, not with WebDev. |
| Sruthi Prabhakaran | sruthi.p@cube84.com | Design. Often the first addressee on a request, but work frequently moves to Anamika's team within hours. Do not assume she is the doer. |
| Anamika Harikumar | anamika.h@cube84.com | **Design lead in practice.** Runs the design cycle, review and staging snagging. Confirm the owner from the thread, not this table. |
| Neethi Nair | neethi.n@cube84.com | Sets the ownership split between Team Nova (design, approval, snagging) and Strategy (board, coordinating WebDev to go live). |
| Anto Godwin | — | Design. Layout, cards, form section, promo clips. |
| Sunil Jith | shsuniljith@cube84.com | Sales and product input. |
| Satha | satha@cube84.com | Leadership. |
| Doug | — | Sales, Director of Sales and Client Advocacy. |
| Nithish | nithish.b@cube84.com | |
| Neethi | neethi.n@cube84.com | |
| Jennifer | jennifer@cube84.com | |
| Prabitha Ravichandran | prabitha@cube84.com | VP Service Delivery, Higher Ed BU. Content owner on Higher Ed pages, and can approve scope, not only content. |

**Team aliases:** `webdev@cube84.com` · `mstrategy.team@cube84.com` · `sales@cube84.com` ·
`solutionarchitect@cube84.com` · `leads@cube84.com` (sender only)

**Stakeholders line format:**
`Stakeholders: Marketing Team (Kiki, Sakshi), Development Team (Surendra, Vedha)`
or `Stakeholders: Strategy & Campaign Team (Kiki, Abhilaash), WebDev Team (Surendra, Vedha)`

---

## Domains

- `cube84.com` — the CUBE84 site. Salesforce consulting, industries, managed services.
- `district-360.com` — the District360 product site. Downtowns, BIDs, place management.

Do not mix them. A District360 comparison page never lives on cube84.com.

---

## Form intent

Every form gets an intent classification. It drives CRM routing and how sales treats the lead.

| Intent | Use for | Lead type |
|---|---|---|
| **Low intent** | Ebook downloads, webinar registrations, resource hub entry, newsletter | Warm lead. Awareness and consideration stage. |
| **High intent** | Contact Us, book a demo, request a consultation, "talk to an expert" | Ready to talk to sales. |

State it explicitly in the BRD. The corpus phrasing: *"Since this form does not contain any
specific personalized requirements, please set it up as a low-intent form."*

---

## Standard form fields

**Low intent (gated asset, webinar, hub entry):**

| Field | Type | Mandatory |
|---|---|---|
| Name / Full Name | Text | Yes |
| Work Email | Text, numbers and symbols | Yes |

**High intent (contact clone):** Full Name, Organization Name, Work Email, Phone Number.
The full contact form also carries Company Size and "Tell us about your project."

**Always specify:**
- Work-email validation: block free domains (Gmail, Yahoo).
- Form footer: `By submitting this form, you agree to our Privacy Policy` linking to
  `cube84.com/privacy-policy`.
- Button label (usually `SUBMIT`, `Get Access`, or `Save Your Spot`).
- reCAPTCHA enabled.

**Removing a field from an existing form:** hide it from the layout but still pass it to CRM
as `NULL`, so existing CRM field mappings stay unchanged. Say this explicitly.

**Cloning a form:** it always needs a **new unique form ID and form name**, even when it
looks identical. Format is lowercase snake_case, e.g. `hmis_and_hud_demo_form`,
`affordable_housing_consultation_form`.

---

## Lead flow

The standard chain:

```
Form submit
  → data stored in the website database / CMS (backup)
  → lead pushed to Pardot via API
  → Pardot syncs to Salesforce CRM
  → internal notification email fires
  → visitor gets their asset (redirect, email, or thank-you state)
```

Pardot handles lead creation and the Salesforce sync. Say "connected to Pardot the same way
it was set up for [named previous page]" when a precedent exists, it saves the dev team time.

### UTM to Lead Source mapping

| UTM source | Lead Source in CRM |
|---|---|
| LinkedIn Ads | LinkedIn |
| Google Ads | Google Ads |
| Organic / Direct | Website CUBE84 |

`Lead Source Detail` is pulled dynamically.

**Critical rule:** if a lead already exists in CRM, **do not overwrite** the existing Lead
Source. Append the UTM values and Lead Source Detail instead.

CRM configuration is Mohan's, not WebDev's. Name him.

### UTM parameters

Supply ready-to-use UTM strings for the social and email teams. Format:

```
LinkedIn Ads:
<url>?utm_source=linkedin&utm_medium=paid_social&utm_campaign=<campaign>&utm_content=[ad_name]

Email Campaign:
<url>?utm_source=email&utm_medium=email&utm_campaign=<campaign>&utm_content=[email_name]

Organic Social:
<url>?utm_source=linkedin&utm_medium=organic_social&utm_campaign=<campaign>
```

---

## Internal notification emails

**From:** `leads@cube84.com` (or `Website Lead <leads@cube84.com>`)

**Default marketing recipient set:**
sakshi.s@ · kirithiga.s@ · mohan.s@ · satha@ · webdev@ · mstrategy.team@
Add the BU owner when relevant (e.g. prabitha@ for Higher Ed).

**Sales routing rule:** `sales@cube84.com` is only included when the lead is **complete and
actionable**. For multi-step tools, "started" and "dropped off" notifications go to marketing
and web only. Only "completed" goes to sales. Stated in the corpus as: *"This ensures sales are
only looped in when there is a completed, actionable lead worth following up on."*

**Subject line patterns:**
- `New Event Lead from CUBE84 Landing Page`
- `New eBook Download — <asset name>`
- `New Submission on <page name> Landing Page`
- `<Tool> — Lead Completed` / `Lead Did Not Complete <Tool>`

**Body should carry:** name, email, submitted at, and where relevant IP address, city, state,
country, plus the actual responses the visitor gave.

---

## The technical checklist

Every page BRD specifies these. Omitting one is how things break at go-live.

| Item | What to write |
|---|---|
| **Meta title** | Exact string. Pattern: `<Page topic> \| CUBE84` or `<Topic> \| District360`. **Product and solution pages break this deliberately and the product name leads.** Live examples: `Alumni Engagement Platform on Salesforce \| Alma by CUBE84` and `Loop \| Student Engagement Solution for Higher Ed \| CUBE84`. Do not "correct" an approved title to the generic pattern. |
| **Meta description** | Exact string. Also serves as OG description on District360 pages. |
| **URL** | Exact and final. Confirm before dev starts. |
| **Canonical tag** | Self-referencing, pointing at its own confirmed URL. Especially important when the page replaces an existing URL. Surendra owns it. |
| **Redirects** | If this page replaces one, the old URL must redirect cleanly before go-live. No 404s, no lost SEO value. |
| **Sitemap** | State whether the page is in `sitemap.xml`. Pages reachable only by interlink must still be added so search engines can find them. Standalone campaign landing pages are deliberately excluded. |
| **Navigation** | State whether it appears in global nav. Landing pages do not. |
| **Image alt text** | Every image needs descriptive alt text. No image goes live without it. Name who provides it. |
| **Mobile responsiveness** | Font sizes, button tap targets, image scaling, CTA placement. Reviewed and signed off before go-live. |
| **Page speed** | Large images compressed and optimized before handoff. Dev flags anything likely to affect load time before building. |
| **Tracking** | Tracking tag plus a conversion event for the primary action. If the page redirects off-domain, track the button click, not a pageview. |
| **reCAPTCHA** | On every form. |
| **FAQ schema** | JSON-LD `FAQPage` block, supplied verbatim in the BRD, on customer stories and comparison pages. **Google retired FAQ rich results in May 2026, so do not promise star-style snippets.** Keep the markup for entity clarity and for AI answer engines, which still parse it. Say that in the BRD so nobody rips it out expecting a ranking gain that no longer exists. |

---

## Pages you will reference constantly

| Page | URL | Used as |
|---|---|---|
| Contact Us | `cube84.com/contact` | The clone source for every event landing page |
| Nonprofit Toolkit | `cube84.com/download-nonprofit-toolkit` | Resource hub layout reference |
| Downtown Resource Hub | `district-360.com/downtown-tech-resource-hub/` | Resource hub layout reference |
| Higher Ed ebook | `cube84.com/ultimate-guide-to-salesforce-for-higher-education-ebook` | Gated ebook page reference |
| Managed Services | `cube84.com/engagement-model/salesforce-managed-services-support` | |
| District360 Contact | `district-360.com/contact-us` | CTA destination on all D360 pages |

---

## Voice

- Plain, direct, instructional. Short sentences.
- Second person to the dev team where it helps: "Please set up the UTM to Lead Source mapping."
- Bold the values that matter so they are scannable.
- **No em dashes.** Comma or period.
- Do not pad. A three-line section that says everything beats a page that says it twice.
