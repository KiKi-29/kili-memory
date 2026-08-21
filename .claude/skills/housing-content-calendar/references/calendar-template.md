# Calendar HTML Template

The weekly calendar is a **standalone local document**, not a CMS fragment. Full
`<!doctype html>`, one `<style>` block, fonts embedded, nothing loaded from the network. It has
to open correctly from `Homeless and Housing/` by double-click, offline, on any machine.

It is an internal planning document, so it uses the full CUBE84 palette. The teal and navy
housing-audience palette applies to the published pieces themselves, not to this.

---

## Palette, and what each colour is allowed to mean

| Token | Hex | Used for |
|---|---|---|
| White Smoke | `#F6F6F6` | Page ground |
| White | `#FFFFFF` | Card surfaces |
| Eerie Black | `#161616` | Text, linework, bars |
| Azure Radiance | `#4187FF` | SEO/GEO/AEO bucket, primary accent |
| Electric Violet | `#7646FE` | Thought Leadership bucket |
| Coral Red | `#EE4D45` | Functional only: killed topics, missing data, the manual-production gap |
| Fuego Green | `#BDDE3D` | Functional only: cleared the evidence floor |
| Lightning Yellow | `#FDCB18` | Watch list, sparingly |

Two accents carry the bucket split, and that is the only thing colour encodes at card level.
Never colour a card for decoration.

---

## Fonts

Base64 the four woff2 files from `.claude/writer/assets/fonts/` into `@font-face`
`src:url(data:font/woff2;base64,...)`. About 83KB encoded, which is fine for a local file and
the only way the document survives being emailed or opened offline.

```
b64() { base64 -i "$1" | tr -d '\n'; }
b64 .claude/writer/assets/fonts/Poppins-700.woff2
```

Poppins 700/800 for headings and numbers-as-display. Lato 400/700 for body, labels and table
figures. Always with a fallback stack. No third typeface, ever.

---

## Document shape

```
<!doctype html>
<html lang="en"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Housing Content Calendar · WE dd-mm</title>
  <style> /* fonts, tokens, layout */ </style>
</head><body>

  header          Week ending, tracker file read, generated date, mode
  provenance      One line: which file, how it was established newest, row count
  accounting      The funnel strip. Six numbers.
  visual 1        Objection frequency bars
  topics          Cards, SEO and TL interleaved in proposal order
  watchlist       Weak signals with counts, waiting
  killed          Dropped topics with the reason
  outofscope      One line: how many rows, what sector, not mined
  footer          Approval instruction

</body></html>
```

Layout: `max-width:1100px`, single column of cards at `max-width:760px` for readability. Cards
stack on narrow screens. Any wide table gets its own `overflow-x:auto` wrapper so the page body
never scrolls sideways.

---

## The accounting strip

Six numbers, in a row, each with its label under it. This sits **above** the topics, on purpose:
it is the honest frame for everything below it.

`Rows read` · `In scope` · `Signals clustered` · `Cleared the floor` · `Survived dedupe` ·
`Proposed`

Every number countable from the run. If two of them cannot be reconciled, print both and say
which one you could not verify. Never adjust a number so the arithmetic looks clean.

---

## Visual 1 — Objection frequency

Inline SVG, horizontal bars, one per mined signal, sorted by count descending.

**Drawn to scale, and here is the arithmetic so it cannot be eyeballed.** With a plot width of
`W = 520px` and `maxCount` the highest count in the set:

```
barWidth(n) = round(n / maxCount * W)
```

Every bar computed from that formula. A bar for count 2 next to a bar for count 6 is exactly one
third of its length. Print the count as a label at the end of each bar so the reader can check
the drawing against the number.

Bars in Eerie Black `#161616`. Bars for signals that cleared the evidence floor get Fuego Green
`#BDDE3D`, which is a functional use: it encodes floor-cleared, not emphasis.

`<figcaption>` names the source and the window, in the form:

> Source: Weekly Conversations Report - Cube 84 - WE 14-08, weeks 15-05 to 14-08, 243 rows.

Never a bar without a caption naming where the number came from.

---

## Visual 2 — Signal-to-topic funnel

The accounting strip drawn as a funnel: five stacked horizontal bars, widths proportional to the
same numbers, so the **drop between stages is the visual**. Same `n / max * W` arithmetic.

Label each drop with what caused it: `logistics cut`, `out of scope`, `below evidence floor`,
`already published`, `no search demand`. That labelling is the insight. A funnel without the
reasons is decoration and does not ship.

---

## Topic card

One card per proposed topic, `background:#FFF`, `border-left:4px solid` in the bucket colour,
`border-radius:6px`, generous padding, real vertical space between cards.

Every card carries:

| Field | Notes |
|---|---|
| Number | The number Kiki replies with. Large, Poppins. |
| Bucket chip | `SEO · GEO · AEO` in azure, or `THOUGHT LEADERSHIP` in violet |
| Format chip | `blog`, or `whitepaper` / `ebook` with a Coral Red `manual production, no downstream agent` tag |
| Working title | Poppins 700, 20px |
| The signal | Anonymized pattern, conversation count, week range |
| Supporting quote | Scrubbed. Blockquote, left rule in the bucket colour. Roles only, never names. |
| Persona | From the audience file, by its name there. Not invented. |
| Publish week | Suggested slot |
| Interlinks | Existing CUBE84 pages this should point at |

### SEO cards add

A small figures table: primary keyword, **volume**, **KD**, secondary keywords, question
variants, AI Overview present yes/no, GSC striking distance if known.

Any figure that could not be measured prints `unavailable` in Coral Red with the tool that
failed named next to it. An empty cell reads as zero and that is a lie the reader cannot detect.

### Thought Leadership cards add

The three slots, labelled and visibly separate, because their separateness is the test:

1. **The consensus** — what the sector believes
2. **Who holds it** — the category of person
3. **What we say instead** — one falsifiable sentence

Then **the strongest counter-argument**, in full, in a bordered box. A TL card without a
counter-argument printed on it has not passed the test, it has skipped it.

---

## Watch list, killed, out of scope

**Watch list.** Weak signals with counts and week ranges, in a compact table. A count that moved
since last week gets an arrow and the old number. This is where next week's topics come from.

**Killed.** Every dropped topic with the reason: `no search demand`, `already published`,
`pov-editor refused: no identifiable opposing view`, `rejected 2026-08-12, not revisiting`. Coral
Red rule on the left. Showing the kills is what makes the survivors credible.

**Out of scope.** One line. How many rows, which sectors, not mined, why.

---

## Footer

The approval instruction, plainly: reply with the numbers to queue. Note that approval covers
this batch only. Note that nothing has been written anywhere yet.

---

## Rules that do not bend

- **Every visual encodes a real number from the run.** No mood graphics, no icons standing in
  for an idea, no bar whose length was chosen by eye.
- **Every figure names its source**, in a caption or beside the number.
- **No prospect names, companies, emails or phone numbers**, except company and role inside topic
  cards where Kiki needs them for judgment. This file stays local and is never published, never
  committed, never attached to anything outward-facing.
- **Poppins and Lato only.**
- **Nothing loaded from the network.** No CDN, no remote font, no external image. The document
  works offline or it is broken.
