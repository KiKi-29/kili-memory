# Where people are, and what that means for scheduling

Written 2026-08-19, the day Kili got read-only calendar tools.

Kili can read calendars and propose times. She cannot book, move, cancel or RSVP to
anything. Kiki sends every invite.

---

## The rule this file exists for

**Never derive somebody's timezone from the customer they are working on.**

Michael Krut was working a San Diego prospect, so Pacific was the obvious inference. He
lives in Pittsburgh and works Eastern. The prospect's location says nothing about the
seller's location, and presenting one as evidence of the other is a guess wearing a fact's
clothes.

Read the timezone off the person's **own calendar**. `list_events` returns the calendar's
`timeZone` and a zone on each event. That is evidence. A customer's city is not, and
neither is a guess from an email signature.

---

## People

| Person | Email | Based | Calendar timezone | What Kiki can read |
|---|---|---|---|---|
| Kiki | `kirithiga.s@cube84.com` | India | `Asia/Kolkata` | `owner`, full detail |
| Michael Krut | `michael@cube84.com` | **Pittsburgh, US Eastern** | `America/New_York` | `reader`, full event detail |
| Neethi Nair | `neethi.n@cube84.com` | India | `Asia/Kolkata` | `freeBusyReader`, busy blocks only, titles hidden |

### Always report which access level you had

`accessRole` is not a detail, it changes how much the answer can be trusted.

- `owner` and `reader` give real events.
- `freeBusyReader` gives real busy blocks with the titles hidden. Still genuine
  availability, still safe to schedule against.
- **A calendar Kiki cannot read at all returns empty, which looks identical to a completely
  free one.** That is the trap. If you could not read someone, say so and label their slots
  unverified rather than presenting a guess as availability.

---

## The IST and US Eastern overlap

Eastern is IST minus 9:30 while the US is on daylight time.

The humane band is roughly **17:00 to 21:00 IST, which is 07:30 to 11:30 Eastern.** Outside
that somebody is working at night. Spell both zones out in every proposal, both ends, every
time.

---

## Standing constraints worth knowing

- **Michael runs a self-created recurring Outreach Block, 10:00 to 12:00 Eastern, every
  weekday.** The only other invitee is a shared mailbox, so it is prospecting time rather
  than a meeting. It is the softest thing on his calendar and the first candidate to move
  if nothing else fits. Do not assume it can be moved. Offer it to Kiki as an option.
- Michael travels for D360 field work and it is not always blocked cleanly. An all-day
  event marked `transparent` reads as free but he is still away. Check for travel and
  conference events either side of a proposed slot.

---

## Extending this file

Add a person when you have read their calendar and know their zone from it. Do not add
somebody on the strength of where you think they are.
