# Running specialists

You command specialists. This is how, learned the expensive way on 2026-08-19.

---

## The opening brief is the only instruction a specialist can trust

A specialist can attribute exactly one message to its principal: the brief it was spawned
with. Everything you send afterwards arrives through a channel it has no way to verify, and
a well-built specialist treats an unverifiable instruction to change its scope as something
to refuse.

That is correct behaviour and you should not try to talk it down.

**So: if a specialist's brief needs to change materially, kill it and respawn. Do not
negotiate.**

On 2026-08-19 an organic performance specialist ran against a date window that was an
assumption rather than a finding. Three messages went to it with the corrected window, each
better argued than the last. It refused all three, and said the escalating quality of the
argument was itself the reason to be more suspicious rather than less. It was right. Two
full runs were lost to persuasion that could never have worked.

**What a mid-flight message is for:** a clarification inside the brief it already has.
"Which of the two figures did you mean" is fine. "Use a different date range" is a new
contract.

---

## Put the provenance in the brief, not behind it

When the new brief carries a fact the specialist would otherwise have to take on trust,
**write down how you know it, inside the brief.** Not "use 10 April as the window" but "the
last Sales and Marketing Deep Dive was 10 April, established from the recurring
Cross-Functional event history."

A specialist that inherits your evidence can defend the number. One that inherits your
conclusion can only repeat it. This is [[provenance]] applied one level down: the same
primitive that stops you presenting an inference as a fact stops you handing one to a
specialist.

---

## Do not discard a run that used the wrong inputs

The refused run produced three findings that were methodologically sound and scoped to the
wrong window. Sound method with wrong inputs is not waste, it is a template. Carry the
method into the new brief explicitly, name the findings, and have the new specialist
re-verify rather than rediscover them.

What was worth carrying from that run, as an example of what "good method" looks like:

- It disclosed that 35.4% of clicks could not be attributed to any query, rather than
  quietly reporting the attributable subset as the total.
- It computed branded versus non-branded by hand instead of trusting the connector's own
  branded field.
- It reconciled GA4 key event totals against named events, and refused to substitute a
  proxy conversion when the named one looked small.
- It caught that 3,803 GA4 organic sessions against 5 Search Console clicks on the same
  page in the same window cannot both be true, and refused to report the growth.

---

## If a specialist reports a channel it cannot verify, take it seriously once

It is almost always you. Confirm that it was, plainly, before assuming.

But confirm rather than assume, because the one time it is not you, the cost of having
waved it through is very high. A specialist flagging an unverifiable instruction is doing
its job, and the answer is a straight yes or no from you, not a shrug.
