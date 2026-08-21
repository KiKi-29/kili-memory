# HTML + Cover Templates (CUBE84 Blog Publisher)

These are the assembly templates for `body_html` and the featured cover image.
All CSS is **inline** (either `style="..."` attributes or a single `<style>` block at
the top of the fragment) so it survives whatever the CMS does to the markup.

Two different palettes apply, on purpose:

- **Blog body** follows Wrighter's tighter rule: only `#F6F6F6`
  (light background), `#161616` (near-black text), `#4187FF` (azure — links and the
  single data/accent color), plus black and white. No red/green/yellow/orange in the body.
- **Cover image** may use the fuller CUBE84 brand palette from `CLAUDE.md`
  (azure `#4187FF`, electric violet `#7646FE`, lightning yellow `#FDCB18`, etc.),
  since it is a standalone brand asset, not body content.

Fonts: **Poppins** for headings, **Lato** for body/labels/numbers. In `body_html`
declare them with a web-safe fallback stack (the CMS front end is expected to load the
brand webfonts); never substitute another typeface.

---

## 1. `body_html` fragment skeleton

Assemble the drafted blog into this shape. Do not include `<html>`, `<head>`, or
`<body>` tags — most CMSes wrap the fragment themselves. Lead with one scoped `<style>`
block, then the content.

```html
<style>
  .c84-blog{font-family:'Lato',-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    color:#161616;line-height:1.7;font-size:18px;max-width:760px;margin:0 auto}
  .c84-blog h1,.c84-blog h2,.c84-blog h3{font-family:'Poppins',-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    color:#161616;line-height:1.25;font-weight:700}
  .c84-blog h1{font-size:38px;margin:0 0 8px}
  .c84-blog h2{font-size:27px;margin:44px 0 12px}
  .c84-blog h3{font-size:21px;margin:28px 0 8px}
  .c84-blog p{margin:0 0 18px}
  .c84-blog a{color:#4187FF;text-decoration:underline}
  .c84-blog ul,.c84-blog ol{margin:0 0 18px 22px;padding:0}
  .c84-blog li{margin:0 0 8px}
  .c84-blog table{border-collapse:collapse;width:100%;margin:24px 0;font-size:16px}
  .c84-blog th,.c84-blog td{border:1px solid #e2e2e2;padding:10px 14px;text-align:left;vertical-align:top}
  .c84-blog th{background:#F6F6F6;font-family:'Poppins',sans-serif;font-weight:600}
  .c84-blog td.num,.c84-blog th.num{text-align:right;font-variant-numeric:tabular-nums}
  .c84-blog figure{margin:24px 0}
  .c84-blog figcaption{font-size:14px;color:#5a5a5a;margin-top:8px}
  .c84-blog .callout{background:#F6F6F6;border-left:4px solid #4187FF;padding:16px 20px;margin:24px 0;border-radius:4px}
</style>

<article class="c84-blog">
  <h1>{{TITLE}}</h1>

  <p>{{OPENING}}</p>

  <h2>{{SECTION HEADING}}</h2>
  <p>{{PROSE — every table/chart must be backed by full prose. Wrighter's table rule.}}</p>

  <!-- Embed one of: a comparison table, an inline SVG chart, or a diagram. -->
  {{VISUAL BLOCK}}

  <!-- ...repeat sections... -->

  <h2>Outbound links</h2>
  <ul>
    <li><a href="{{URL}}">{{Source name}}</a> — {{one-line note}}</li>
  </ul>
</article>
```

### Table block (comparison / decision / do-don't)

```html
<table>
  <thead><tr><th>Option</th><th>Best for</th><th class="num">Setup time</th></tr></thead>
  <tbody>
    <tr><td>{{A}}</td><td>{{...}}</td><td class="num">{{2 wks}}</td></tr>
  </tbody>
</table>
```

### Inline SVG bar chart (azure, drawn to scale from real numbers)

Bars must be proportional to the actual cited figures (Rule 0). Label every bar with its
value and name the source in a `<figcaption>`. Compute each bar's height/width from the
data — never eyeball it.

```html
<figure>
  <svg viewBox="0 0 480 260" role="img" aria-label="{{chart description}}"
       font-family="Lato, sans-serif" width="100%">
    <!-- baseline -->
    <line x1="40" y1="220" x2="470" y2="220" stroke="#c9c9c9" stroke-width="1"/>
    <!-- one <rect> per datum: y = 220 - (value/maxValue)*180 ; height = (value/maxValue)*180 -->
    <rect x="60"  y="{{y1}}" width="70" height="{{h1}}" fill="#4187FF"/>
    <text x="95"  y="{{y1-8}}" text-anchor="middle" font-size="13" fill="#161616">{{v1}}</text>
    <text x="95"  y="238" text-anchor="middle" font-size="12" fill="#5a5a5a">{{label1}}</text>
    <!-- ...more bars... -->
  </svg>
  <figcaption>Source: {{named source}}.</figcaption>
</figure>
```

For line/area trends, plot points with `<polyline>` using the same value→pixel mapping.
Keep to azure `#4187FF` for the data mark and greys for axes/gridlines in the body.

### Diagram (framework / steps / flow)

Use simple `<svg>` boxes + connectors, or a semantic ordered list styled as steps. Keep
labels in Poppins, connectors in `#161616`. No external images.

---

## 2. Cover image template (rasterized → `featured_image_base64`)

Full standalone HTML (this one **does** include `<head>`), sized 1200×630. Rendered to
PNG by `scripts/rasterize_cover.sh`. Set the real headline, kicker, and audience text —
never leave AI-guessed placeholder text on the shipped cover.

```html
<!doctype html>
<html><head><meta charset="utf-8">
<!-- Brand webfonts, base64-embedded so Poppins/Lato render offline in headless Chrome.
     Absolute path is required because the cover is rasterized from a temp location. -->
<link rel="stylesheet" href="file:///Users/kirithigasundaramoorthy/Kiki/.claude/wrighter/assets/fonts.css">
<style>
  html,body{margin:0;padding:0}
  .cover{width:1200px;height:630px;box-sizing:border-box;background:#F6F6F6;color:#161616;
    position:relative;overflow:hidden;padding:72px;display:flex;flex-direction:column;justify-content:center;
    font-family:'Poppins',-apple-system,Helvetica,Arial,sans-serif}
  .bar{width:64px;height:8px;background:#4187FF;border-radius:4px;margin-bottom:28px}
  .kicker{font-size:20px;letter-spacing:.14em;text-transform:uppercase;color:#4187FF;font-weight:700;margin-bottom:18px}
  .headline{font-size:62px;line-height:1.08;font-weight:800;max-width:900px;margin:0}
  .accent{color:#4187FF}
  .foot{position:absolute;left:72px;bottom:56px;font-size:22px;font-weight:700}
  .ring{position:absolute;right:-120px;top:-120px;width:420px;height:420px;
    border:36px solid #FDCB18;border-radius:50%;opacity:.9}
</style></head>
<body>
  <div class="cover">
    <div class="ring"></div>
    <div class="bar"></div>
    <div class="kicker">{{AUDIENCE / CATEGORY}}</div>
    <h1 class="headline">{{HEADLINE with one <span class="accent">phrase</span>}}</h1>
    <div class="foot">CUBE84</div>
  </div>
</body></html>
```

Notes:
- **Fonts are already embedded.** Headless Chrome renders offline (no Google Fonts fetch),
  so a bare `font-family:'Poppins'` would fall back to a system sans and break the
  Poppins/Lato-only brand rule *on the cover image*. The `<link>` above pulls
  `assets/fonts.css`, which carries Poppins (700, 800) and Lato (400, 700) as base64
  `@font-face` rules (latin subset, SIL OFL, ~82 KB). Verified rendering correctly. Keep the
  `<link>` in every cover. If you ever move the skill folder, update the absolute path (or
  regenerate the file — see below). The `body_html` fragment does **not** need this; the CMS
  front end serves the brand fonts there.
  - To regenerate/extend `fonts.css` (e.g. add a weight): re-download the woff2 into
    `assets/fonts/` from Fontsource (`https://cdn.jsdelivr.net/fontsource/fonts/poppins@latest/latin-<wght>-normal.woff2`,
    same for `lato`), then base64-encode each into an `@font-face` rule.
- Keep the headline ≤ ~9 words so it fits at 62px. If longer, drop the font-size step
  (52px) rather than let text overflow.
- The yellow ring is the one place body-forbidden colors are allowed (this is a cover,
  not body content). Swap the ring/accent for electric violet `#7646FE` on housing-audience
  covers, and avoid lime green per the housing palette memory.
- Logo: if a brand SVG is dropped into the cover, use the **black or white** CUBE84 vector
  from `Brand Guidelines/` — never a recolored logo. The plain "CUBE84" wordmark above is
  the safe default when the vector isn't wired in.

---

## 3. Rasterizing the cover

```bash
scripts/rasterize_cover.sh <cover.html> [out.png] [width] [height]
# prints base64 (no newlines) to stdout; also writes out.png (default 1200x630 @2x)
```

Capture stdout as the `featured_image_base64` argument. If Chrome is unavailable or the
run is blocked, the fallbacks are `qlmanage -t -s 1200 -o <dir> <cover-as-svg>` or an
`sips` conversion of a pre-rendered PNG — but headless Chrome is preferred because it
renders the HTML/CSS/fonts faithfully.
