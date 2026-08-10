# Salesforce and Pardot

How Kili reads the CRM. Verified live 2026-08-09.

---

## Two routes into Pardot, and they answer different questions

Account Engagement, still called Pardot everywhere internally, is reachable two
ways. Pick by the question, not by habit.

### Route 1. Salesforce `pi__` fields, for per-person state

The Pardot managed package hangs fields prefixed **`pi__`** off Lead, Contact and
Account, queryable by ordinary SOQL through the **CUBE84 Salesforce Org
Instance** connector.

Use this for **"what is the state of these specific people"**. One query, fast,
and it joins straight onto owner, status and company.

`ToolSearch` for
`mcp__claude_ai_CUBE84_Salesforce_Org_Instance__soqlQueryplatform_sobject_all`.
Note the odd `platform_sobject_all` suffix on the tool name.

### Route 2. Windsor.ai `pardot` connector, for actual marketing reporting

Windsor carries a full Pardot connector, account `0UvJ3000000CaRCKA0`, and it is
far richer than the `pi__` fields. This is the one for **"did this campaign
work"**.

Tables it exposes:

| Table | Carries | Use it for |
|---|---|---|
| **Email Statistics** | sent, delivered, delivery rate, unique opens, open rate, total and unique clicks, CTR, click-to-open ratio, hard and soft bounces, opt-outs, spam complaints | Real send performance. Nothing in Salesforce comes close. |
| **Email** | name, subject, sent_at, campaign, builder vs legacy | Which email, when |
| **Activity** | every visitor activity with type name, timestamp, and the email, form, landing page or redirect it belongs to | Per-person behaviour, the granular version of `pi__last_activity__c` |
| **Prospect** | score, grade, first and last activity, recent interaction, opted out, bounce state, all UTM parameters, `prospect_salesforce_lead_id` | Joins back to Salesforce |
| **Visit / Visitor Page View** | page URLs, titles, durations, page view counts | What they read on the site |
| **Campaign, Opportunity, Prospect Accounts** | standard objects | Attribution |

`prospect_salesforce_lead_id` and `prospect_salesforce_id` are the join keys back
to the Salesforce records. Use them rather than matching on email.

Workflow is always `get_fields` then `get_data`. **Never guess a field ID**, the
call fails. Filter hard and use `date_preset` or `date_from`/`date_to`.

**It is slow.** A six month Email Statistics pull ran past 120 seconds and moved
to the background. Expect that, do not treat it as a failure, and do not re-fire
the query.

### Which to reach for

| Question | Route |
|---|---|
| Are these 24 people in the CRM, and what state | Salesforce `pi__` |
| Has this person ever engaged, and when | Either. `pi__last_activity__c` is faster. |
| Did this email get opened, and by how many | **Windsor only.** Salesforce cannot answer it. |
| What did this person actually click or read | **Windsor**, Activity and Visitor Page View |
| Who owns them and what is the lead status | Salesforce |
| Did this campaign produce pipeline | Windsor Opportunity, or Salesforce Opportunity |

Do not report that Pardot is unavailable. It is available twice.

---

## The Pardot fields, and what each one actually tells you

| Field | Type | Read it as |
|---|---|---|
| `pi__score__c` | number | Engagement. Sums tracked opens, clicks, form fills, page views. **Zero means no tracked activity, which is not the same as no interest.** See the trap below. |
| `pi__grade__c` | text | ICP fit, A through F. Only populated if a grading profile is configured. **Null across the board at CUBE84**, so it carries no signal here. |
| `pi__last_activity__c` | datetime | When Pardot last recorded anything. The single most useful field. Null means Pardot has never seen this person do anything. |
| `pi__conversion_date__c` | datetime | When the prospect converted in Pardot. |
| `pi__created_date__c` | datetime | When the Pardot prospect record was made. Often minutes after the Salesforce Lead. |
| `pi__url__c` | url | Direct link to the prospect in the Pardot UI. Useful to hand Kiki when she wants to look herself. |
| `pi__comments__c` | text | Rarely populated. |

---

## The trap that will mislead you, and it already has

**Pardot only sees email that Pardot sent.**

A 1:1 email typed in Gmail or Outlook is invisible to it. No open tracking, no
click tracking, no score movement, no `last_activity` update. The Salesforce
activity log will show the send as a `Task`, because the Gmail integration logs
it, and Pardot will show nothing at all.

The verified case: on 21 July Doug sent two Loop emails individually to 24
prospects, one message each, seconds apart. Salesforce holds 24 completed Tasks.
Pardot holds a score of zero on 23 of them and no activity dated after 22 June.

**The correct finding there is "this send cannot be measured", not "nobody
engaged".** Those are different claims and only one of them is true. Saying the
second would have told Kiki the campaign failed when in fact nothing was ever
instrumented.

Before reading anything into a Pardot score, establish **how the email was
sent**. If it was a manual 1:1 send, stop and say so.

---

## Reading engagement honestly

| What you see | What it means | What it does not mean |
|---|---|---|
| `score` 0, `last_activity` null | Pardot has never tracked this person | They ignored us |
| `score` 0 but Tasks exist | Contact happened outside Pardot | No contact happened |
| `last_activity` predates the send | The send was not Pardot-tracked | They went quiet |
| `score` > 0 | Real tracked engagement. Worth attention. | |

---

## The other half: activity actually lives on Task

`pi__last_activity__c` covers Pardot-tracked behaviour. Everything a human did
lives on the **Task** object, linked by `WhoId`.

```sql
SELECT Id, Subject, Status, ActivityDate, CreatedDate, Owner.Name, Who.Name
FROM Task
WHERE WhoId IN ('00Q...','00Q...')
  AND CreatedDate >= 2026-07-01T00:00:00Z
ORDER BY CreatedDate DESC
```

**Always check both.** The Lead's `LastModifiedDate` will not move when someone
logs a call or an email against it, so a stale `LastModifiedDate` is not proof
that nothing happened. Conversely a Task with no matching Pardot activity means
outbound went out and nothing came back, which is usually the real story.

---

## Useful shapes

**Do these people exist, and what state are they in**

```sql
SELECT Id, Name, Email, Company, Status, LeadSource, Owner.Name,
       CreatedDate, LastModifiedDate, IsConverted
FROM Lead WHERE Email IN (...) ORDER BY Company
```

**Same people, engagement view**

```sql
SELECT Name, Company, Status, pi__score__c, pi__last_activity__c, pi__url__c
FROM Lead WHERE Email IN (...) ORDER BY pi__score__c DESC
```

**A person may be a Contact, not a Lead.** A converted prospect leaves Lead and
becomes Contact, keeping its `pi__` fields. If a Lead query comes back short,
query Contact on the same emails before concluding they are missing.

Emails in Salesforce are **not case-consistent**. `SELECT ... WHERE Email IN`
matched all 24 despite the CRM holding `Pauld@mccc.edu` where Gmail had
`pauld@mccc.edu`, so SOQL is case-insensitive on this field. Do not
pre-normalise and do not treat a case difference as a mismatch.

---

## Standing facts, dated 2026-08-09

- The org holds **51,956 Leads**. Always filter, never scan.
- `pi__grade__c` is **null org-wide**. No grading profile is configured, so grade
  is not a signal at CUBE84.
- Pardot prospect IDs on the NASPA cohort run around `1124xxxxx` to `1129xxxxx`.
- Gmail-logged email Tasks are owned by **Mohan Kumar**, the integration user,
  regardless of who actually sent. Task owner is therefore not the sender. Read
  the Lead owner for that.

---

## A write can return success and still not persist

Verified the hard way on 2026-08-10. Setting `OwnerId` on Lead
`00Qfw00000ZThwgEAD` returned `{"value":""}` with no error, moved
`LastModifiedDate` to 11:47 UTC and stamped `LastModifiedById` with the calling
user, and left the field completely unchanged. Twice. The same payload set
`Next_Steps__c` correctly, so this was a per-field silent drop rather than a
failed request.

**So never report a write as done on the strength of the success response.** Read
the field back. This matters most on ownership and on anything an assignment rule
or a trigger can reach.

The known suspect on Lead is the **active** assignment rule `01Q5i000001coCLEAY`,
"D-360 Web to lead assignment". The other candidate is the connector lacking
Transfer Record permission. Either way it is an admin fix, not something to
retry. Two attempts is the limit, then escalate and say plainly that it did not
stick.

## Rules

- **Never dump 24 rows at Kiki.** Give her the shape and the exceptions. She
  reads you on a phone.
- **Distinguish "no data" from "no engagement" every single time.** This is the
  one error in this file that would actively mislead her.
- **Filter every query.** Fifty thousand leads.
- **Writing is allowed, but only on Kiki's explicit instruction.** The blanket
  read-only rule was lifted by Kiki on 2026-08-10. The permission is narrow: she
  has to have told you to make that specific change. Never write unprompted, and
  never infer a write from a general go on a batch or from her approving
  something adjacent. Propose first stays the default for everything she has not
  specifically asked for. The case: she said "All Levelshift notes and activity
  should go to salesforce, lead owner change to me", so owner, next steps and two
  logged activities were written, and nothing else was.
- These are real prospects. Treat names and emails as confidential and keep them
  out of anything that leaves the conversation.
