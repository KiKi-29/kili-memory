# Writing an update on a monday board

Read this before writing any board update, comment or item description. Not after.

Kiki rewrote one of these by hand on 2026-08-19 rather than explaining what was wrong with
it. Her words: *"I rewrote that comment. Let Kili just read it and learn it. I removed a lot
of noise in that comment."* The edit is the instruction, so it is reconstructed here.

The case: WebDev `9189704731`, item `12841087077`, update `5472931522`.

---

## The discriminator, and it is not length

The obvious lesson is "be shorter". That is the wrong lesson and following it would cause a
different failure.

She **kept two of the longest passages in the update, word for word.** A seventy-word list of
everything checked during the anonymization pass, and a hundred-and-ten-word question about
whether two pages describe the same institution. She cut paragraphs a third that length.

So the test is not how long a sentence is. It is what the sentence does:

| Keep | Cut |
|---|---|
| Words that let the reader **act** | Words that defend a decision already made |
| Words that make a verdict **trustworthy** | Words that re-argue a choice already approved |
| A reason that states a **consequence** | A reason that states a **justification** |

Worked examples from the actual edit:

- **The anonymization checklist survived in full.** Without it, "passed" is an assertion the
  reader has to take on faith. With it, "passed" is evidence. Length was the point.
- **The same-institution question survived in full.** The reader cannot answer it without
  the reasoning, so the reasoning is load-bearing.
- **One line of the meta description rationale survived:** "The draft's own description runs
  236 characters, so roughly a third of it would not have shown." That is a consequence.
- **The slug rationale, the meta title rationale, and the rest of the description rationale
  were deleted.** All three explained why a good decision was good, to a reader who had
  already accepted it and could not change it anyway.

**Give the value. The case for the value belongs in the conversation where the decision was
made, not on the row afterwards.**

---

## Every open item carries a named owner and a temperature

This is the change she made rather than a cut, which makes it the most instructive part.

Three wording changes were listed. She left the first two alone and appended to the third:

> `@Sayli Rajguru Flag to Prabitha. Not urgent or emergency.`

And on the confirmation question:

> `@Sayli Rajguru Again for you.`

Two things in that. **A named owner**, because an open item addressed to nobody is a thing
everyone reads and nobody does. And **a temperature**, because "not urgent or emergency" is
her protecting somebody's week while still asking for the thing. An unqualified ask on a
shared board reads as urgent by default.

**If an item does not have a name against it, it does not go on the board.**

Note who she assigned. Both remaining items went to Sayli, the content owner, not to
Shashank, the developer, even though the row is a build row. Both were content questions.
That matches `../people/working-with-teams.md`: where a question can be routed through the
person who owns the content, route it there.

---

## Four things that do not belong in an update

1. **Recommendations nobody asked for.** A JSON-LD FAQPage suggestion was appended because it
   was technically correct. It was not this row's job and it was cut. Being right is not a
   reason to add something.
2. **Defects in a reference artifact.** Draft banners, version labels and internal count
   mismatches in Sayli's HTML are furniture, not findings. See `../content/artifacts.md`.
3. **A progress summary of our own work.** The update closed with "three of the four items
   logged on this row this morning are now answered." She does not need a scorecard of what
   we have got through. The board shows the state.
4. **Anything you would have to explain later.** If a line needs a follow-up message to make
   sense, it was not ready.

---

## Before posting, check

- Does every open item name a person?
- Does every open item say how urgent it is, or is it silently shouting?
- Is there a sentence that argues for a decision already taken? Delete it.
- Is there a reason that states a consequence for the reader? Keep it.
- Am I adding a recommendation nobody requested?
- Am I reporting my own progress?
- Is any finding actually an artifact of a reference file rather than the build?
- Mentions go through `mentionsList` only, never typed as `@` text in the body, or monday
  renders them twice.

---

## The mechanism note that keeps biting

There is **no edit or delete tool** for updates in this MCP. `create_update` and
`get_updates` are the whole surface. A wrong update cannot be taken back, only superseded by
a new one that says so in its first line, and the wrong one stays visible underneath.

That is the real reason this file exists. On a board with no undo, the draft has to be right
the first time.
