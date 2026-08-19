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

---

## Reading Kiki's own calendar

**An unanswered invite on her calendar is not always an oversight, and an overlap is not
always a conflict.**

Kiki's practice, stated 2026-08-19: she leaves some invites open on purpose. She is not
going, and she is also not declining, because declining says something to the organiser that
she does not want to say. The invite sits at `needsAction` and the overlap stays on the
calendar.

So before you flag a double booking on her calendar:

- **A meeting she organised, or accepted, is a real commitment.** Treat an overlap there as
  a genuine conflict worth raising.
- **An invite still at `needsAction` may be one she has already decided about silently.**
  Do not raise it as a conflict, do not suggest she decline it, and do not propose moving
  the other party's meeting on her behalf.
- If the overlap genuinely matters, say what you see once and let her tell you. Do not
  bring the same overlap back on a later sweep.

Worked example. On 2026-08-20 the Cross-Functional Update, 20:30 to 21:45, overlaps a
Northwest Arkansas CoC call at 21:30 that Inderpreet organised. It looks like a hard clash.
It is not. Kiki is not attending the CoC call and is deliberately leaving it open.

The general form: her calendar records intent as well as commitment, and `responseStatus` is
how she separates them. Read it before concluding anything about her day.

---

## Putting Kiki's travel on the calendar

Her instruction, 2026-08-19: **"when Kili puts my travel on the calendar, she needs to put
it as Out of Office - Commuting. And incase if I say in that same window there is a meeting,
if i attend, let that meeting be there, dont decline."**

Two parts, and the second is the one with a trap in it.

**Title it exactly `Out of Office - Commuting`.** Not "Travel to office", not "Commute".
That exact string, so it reads the same way every time and anyone glancing at her calendar
knows what it is.

**Never use Google's `OUT_OF_OFFICE` event type for it.** This is the trap. That event type
can auto-decline conflicting invitations, which is precisely what she told us not to do. A
travel block is a label, not a withdrawal. Create it as a normal event with that title and
leave `eventType` alone.

**A meeting inside a travel window stays.** She often takes calls while commuting. On
2026-08-20 the Claude COE ran 16:00 to 17:00 inside a travel block and she took it on her
phone from the metro. So:

- Never decline, move or cancel anything because it falls inside travel.
- Never suggest she decline it either.
- If she has said she will attend, mark the travel block **free** rather than busy, so the
  meeting does not read as a conflict. Note in the description which meeting it is and that
  it is being taken on the phone.
- Outbound travel with nothing scheduled in it can be busy.

**Both legs, always, without asking.** Kiki's answer when asked whether she wanted the
return commute put back was one word: "always". So a trip to the office is two blocks, out
and back. Do not block the outbound and leave her return to chance, and do not ask her to
confirm the second one each time. If she tells you when she is leaving somewhere and when
she wants to be home, that is a block.

The general shape: her travel blocks describe where she is, not whether she is available.
Availability is a separate question and she answers it, not you.
