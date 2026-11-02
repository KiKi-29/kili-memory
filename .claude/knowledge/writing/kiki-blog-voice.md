# How Kiki writes a blog, and the register to match

`kiki-register.md` is how she talks in chat. This file is how she writes for a reader. The rules in
`wrighter.md` say what the voice is; this file shows what it sounds like, because you cannot rule
your way to a voice.

**It is a corpus, not a checklist.** Every passage below is verbatim from a piece Kiki wrote herself
and calls the standard: "so human, readability is excellent, and avoids all kinds of AI slop." Read
it before every draft. When Kiki writes something that sounds particularly like her, add it here with
one line on what it does.

Sources:
- *The Complete Salesforce TCO Guide: How to Calculate, Analyze, and Optimize Costs*, Drive doc
  `1zpDBe8eysie38bnfQxT9EfMhum7Upv-YalM_qRrpldM`
- *How Much Does Salesforce Staff Augmentation Really Cost?* (Kiki, link not yet on file; add
  passages when it is)

---

## 1. Open on the reader's own assumption, not on the topic

> Salesforce costs rarely spin out of control overnight. It usually starts with a simple assumption:
> we are buying a product. Licenses are calculated, an implementation is scoped, the business case is
> approved, and everyone expects the spend to stay within a predictable range.

No definition, no "in today's landscape". The first sentence is a thing the reader has lived. The
second names the belief that caused it. The reader recognizes themselves before they are told
anything.

## 2. Let one word carry the thesis

> It is this *effort* that ultimately shapes long-term cost.

One short paragraph, one italicised word. The whole guide hangs off *effort*. Pick the single word
your perspective turns on and give it a line of its own, once.

## 3. Land the perspective as a short, bold line

> This happens across thousands of organizations, and it is because Salesforce is treated like a
> one-time project when it actually behaves like an ongoing operational system. **Budgeted as CapEx,
> it functions as OpEx.**

The unique perspective, compressed into five words a CFO will repeat. Every piece needs its version
of this line. If you cannot write it, the perspective is not sharp enough yet: send it back.

## 4. Show the arithmetic, then show what the arithmetic misses

> Most Salesforce budgets start with a simple calculation: number of users × license price. For
> example, 100 Sales Cloud Enterprise users at $175 per user per month equals $210,000 a year.

One worked example with real numbers the reader can check, then a paragraph walking through
everything the simple calculation leaves out (implementation partner, integration, migration, admin,
training, enhancements). The number is a doorway, not the point.

## 5. Parallel short sentences for how organizations actually work

> Most organizations struggle to calculate TCO because the required information is scattered.
> Invoices live with finance. Integrations sit with IT. Daily work sits with Salesforce teams.
> Process changes sit with operations.

Four sentences, same shape, no connectives needed because the parallel does the work. Use it for
describing a real operating pattern, never for slogans.

## 6. Escalate by accumulation

> Every new workflow, every process change, every integrated system, every data-quality issue, every
> release cycle, and every enhancement request *adds incremental effort.* Over time, that effort
> compounds.

A list inside a sentence that builds weight, then two short sentences that turn it into the claim.

## 7. Questions the reader should be asking, in their words

> - What are the hidden cost layers behind our licenses?
> - Which activities consistently consume the most effort, and why?
> - Are we relying on a support model that fits the way our environment actually operates?

Written in "we" and "our", the reader's voice, so they read as their own questions rather than a
quiz.

## 8. A method instead of an invented number

> Rather than guessing numbers, think through cost categories and how a retainer shifts spending
> profiles.

Where the honest answer depends on the reader's situation, give them the method (inputs, how to
convert effort to cost, a multi-year view) and never a made-up benchmark. This is the stats rule
written as a writing move.

## 9. Archetypes the reader can place themselves in

> ## A Lean Single-Cloud Organization
> TCO stays steady when changes are simple. It rises when requests grow without a clear owner.

The guide names four environments (lean single-cloud, multi-cloud, highly integrated, regulated) and
says how cost behaves in each. Readers locate themselves faster in an archetype than in a list of
factors.

## 10. Advisory, never selling

> It is meant to guide your thinking, not prescribe a "best" choice. Each model works well when
> matched with the right environment.

> **CUBE84 Insight:** Validation works best when each team confirms the effort they own and the effort
> they influence.

CUBE84 appears as an insight callout and at the CTA, not in the argument. The reader should finish
trusting the method before they are offered help with it.

## 11. Titles are plain. The punch lives in the body.

Kiki, 2026-10-20, rejecting clever title endings: "Should you not just say like guide? playbook? Keep
it straightforward like that. When you write, you should not be a wannabe."

| She approved | She rejected |
|---|---|
| Should You Replace Salesforce With a CRM Built on Claude? | We Build With Claude Every Day. Here's When We'd Tell You to Replace Salesforce |
| Need a Salesforce Specialist? How to Know When | Specialized Salesforce Skills: When to Augment Your Team |
| "guide" or "playbook" after the colon (her suggestion) | Hire Remote Salesforce Developers: Plan First, Hire Second |
| Measuring Salesforce Managed Services Performance: KPIs That Matter | (approved as proposed) |

The shape is keyword plus a plain descriptor ("A Guide", "A Playbook", "KPIs That Matter"), or
the reader's own plain question. The bold line that lands the perspective ("Budgeted as CapEx, it
functions as OpEx") belongs in the body, never in the H1.

---

## One known conflict with the house rules

The TCO guide contains one contrast line: "TCO increases here not because the platform is larger but
because the work has to follow controlled steps." Wrighter's rule 2 bans "not X, but Y" framing.
**The rule stays.** Write the same thought positively: "In a regulated environment, TCO rises
because every change follows controlled steps."
