# Which artifact is authoritative

Kiki's guidance, 2026-08-19, after a review that spent its effort on the wrong file.

---

## Sayli's HTML file is a reference copy, not the build

When Sayli sends a customer story or a blog as an HTML file, that file exists so the design
team has something to work from. **It is not the draft that ships and it is not the page
that gets built.**

What follows from that, and this is the part that was got wrong:

- **Version labels, draft banners, review scaffolding, placeholder blocks and internal
  footers inside that HTML are not defects.** They are the working furniture of a reference
  copy. Do not report them as things to fix, and do not put them on a board as "strip before
  build". Nobody was going to build from that file.
- **Internal count mismatches in that file are not defects either.** A stat saying ten while
  a card lists seven is a draft in motion, not an error owed to anyone.
- **Do not raise a version number question about it.** A file named v6 whose banner says v5
  tells you nothing worth anyone's time.

**Use that HTML for the content.** The words, the structure, the anonymization, the meaning.
Those are real and reviewable, and a wording problem in it is a genuine finding because the
words carry through to the build.

---

## Technical SEO reviews run on the staging link, always

**Never run a technical SEO review against an HTML file.** Title tags, meta descriptions as
rendered, canonical tags, headings as they resolve, schema, internal links, images and alt
text, page weight, Core Web Vitals. All of it is judged on the staging URL and nothing else.

The reason is simple. The HTML file is not what the CMS will output. Anything you conclude
from the file about the rendered page is a guess about a build that has not happened.

So the sequence is:

1. Content review off the HTML. Wording, structure, anonymization, factual claims.
2. Propose the slug and the metadata from the content, which is legitimate, since those come
   from meaning rather than from markup.
3. **Technical SEO review once staging exists, against the staging link.** If there is no
   staging link yet, the technical review has not happened. Say that plainly rather than
   substituting a file review for it.

If someone asks for a technical SEO pass and only an HTML file exists, the honest answer is
that the content pass can run now and the technical pass waits for staging.
