# Knowledge transfer across the roster

**Kiki's standing instruction, 2026-08-24:** *"the knowledge translation should be across the board
of our agents. Never forget that. It is a team of strategic thinking and logical reasoning with
business context."*

Read it as a description of what this roster is supposed to be. Not a set of tools that each hold a
narrow trick, but a team that reasons about the same business and can be corrected as one.

---

## The failure this exists to stop

Kiki reviewed a draft over four rounds on 24 August 2026 and left comments that produced five new
rules. **Every one of them was written into `wrighter.md`, because Wrighter had done the writing.**

Two of those five described mistakes **Charlie** had made.

- Charlie's board `Description` claimed a county RFP had "10 of 11 software requirements about
  reporting." Two independent re-counts found three. Wrighter had written from that figure because a
  Description is an instruction and its counts are treated as already checked.
- Charlie had found and cited that RFP **by name**. The county turned out to be a live prospect.

So the agent that caused both errors learned nothing for four rounds, while the agent that inherited
them learned five things. Nobody noticed until Kiki asked whether Charlie had read her comments.

**A lesson filed only where it was discovered is a lesson half-learned.**

---

## The test: who could commit this, not who did

When a correction lands, do not file it against the agent that was holding the work. Ask three
questions.

**1. Who could make this same mistake?** The org-naming rule was written into Wrighter because
Wrighter published the name. But Charlie sources the material, so Charlie can hand over a named
prospect before Wrighter ever sees it. Both need it. Kili posts to Slack, so she needs it too.

**2. Does the lesson attach to something that travels between agents?** A board field, a Slack
message, a Doc, a brief. **Everyone who writes it or reads it needs the rule**, because the error can
be introduced at either end. The "counts in a Description are load-bearing" rule belongs to Charlie
who writes them and to Wrighter who trusts them.

**3. Is it craft or is it judgement?** Craft stays with the craftsman. Wrighter's heading rules, its
cover paths, its table discipline are its own and would be noise in Charlie. **Judgement travels.**
Anything about evidence, provenance, who may be named, what counts as verified, or how to talk to a
person outside the system belongs to everyone.

When unsure, file it in `.claude/knowledge/` and point every relevant agent's Knowledge table at it,
rather than copying prose into three definitions where the copies drift.

---

## Where a lesson goes

| Kind of lesson | Home |
|---|---|
| Evidence, provenance, counting, what may be named | Shared knowledge file, referenced by every agent |
| A fact about a tool, a board, a connector, a limit | Shared knowledge file, plus the agent that hits it |
| How to write for a particular reader | The agent that writes for that reader |
| Craft internal to one job | That agent's own definition |
| A correction to a specific recorded claim | The ledger or spine that holds the claim, corrected in place with the old value named as superseded |

---

## The weekly sweep

Kiki's suggestion, same conversation: *"Maybe we can run this weekly and update all of them."*

**Owner: Kili**, because she is head of everything and the only one who sees every specialist's work.

What a sweep is for: read the corrections of the last week, wherever they landed, and ask of each one
which other agents could have made the same mistake. Then move the rule, or point the other
definitions at a shared file.

The honest limit, and it is the reason this file exists rather than a calendar entry: **a sweep is a
backstop, not the mechanism.** The mechanism is filing the lesson correctly when it is learned. A
weekly pass catches what was filed narrowly; it cannot catch what nobody wrote down at all.

**What to look at:** the last week of commits touching `.claude/agents/` and `.claude/knowledge/`,
the Review Logs on any document that went through review, the corrections recorded in
`content/housing-signals.md` and `content/housing-pov.md`, and **`lessons/` in `kili-reports`.**

**`lessons/` is the half this sweep was missing.** Everything else on that list is a correction
**Kiki** already made. It is her attention, written down, and it scales exactly as far as she does.
`lessons/` is what Kili noticed herself and could not file, because `kili-memory` is read-only to a
cloud run by design. It is the answer to the limit stated above — *it cannot catch what nobody wrote
down at all* — and it only works if this sweep reads it.

**Promotion is this sweep's job and nobody else's.** An entry in `lessons/` is an observation with
evidence, never a rule, and it is not doctrine until it lands in a file here. For each one, decide:

- **Promote** — it generalises, so write the edit into the right file, and ask the same question as
  every other correction: which other agents could have made this mistake?
- **Leave** — it was a one-off. Say so, and delete the entry so the directory stays readable.
- **Escalate** — it contradicts something Kiki decided. That is hers, not yours. Name the conflict
  and stop. See `intelligence.md` on conditions she set.

This sweep runs where `kili-memory` is writable, which is the only place promotion can happen. See
`memory.md` for what Kili writes and why she is not allowed to write doctrine herself.

**What to produce:** for each correction, either a note that it is already filed where it belongs, or
the specific edit that puts it there. Not a summary of the week. The deliverable is the edit.
