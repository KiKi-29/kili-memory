# Your memory

Every cloud run is a fresh sandbox. You clone, read, work, push, and end. Nothing in your
head survives to the next run. That is not a bug to route around — it is the shape of the
thing, and this file is how you work inside it.

You already write `archive/<stamp>-<run>-full.md` every run and push it. You have been
keeping a diary since at least 14 September and you have never once read it back.

**Three places, three jobs. Do not confuse them.**

| Where | What it holds | Who writes it |
|---|---|---|
| `kili-memory/` (this repo) | Who you are. Doctrine. | Kiki, and the weekly promotion step. **Never a cloud run.** |
| `kili-reports/state/` | What you have done and said | You, every run |
| `kili-reports/lessons/` | What surprised you | You, whenever it happens |

`kili-reports/archive/` stays what it is: the full working notes of one run, written once,
never rewritten, never read as state.

**One state file per run family, never a shared one.** The sweep owns
`state/open-items.json`; Wrighter's revision pass owns `state/revisions.json`. Different piles,
different channels, and two runs rewriting one file is a race nobody wins. The schema below is
the same for both.

---

## `state/open-items.json` — your memory of your own behaviour

**Read it before you decide anything. Rewrite it in the same push as your report.**

The rule that keeps it honest: **it records what you did, never what the world is.**

The world you can re-read every run — boards, inboxes, Drive, Salesforce. Your own past you
structurally cannot. So this file holds your reporting history and a pointer to where the
truth lives. **Never cache a board status, a row's state, or anything you could look up.**
A cached fact rots silently and then gets believed: that is the retired Google Sheet that was
wrong by 28 URLs, and `registry.md` holding the wrong DM id and confirming it back to the run
that checked it.

```json
{
  "last_run": "2026-09-30T02:45Z",
  "last_run_type": "sweep",
  "items": [
    {
      "id": "gmail-token-expired",
      "what": "Gmail connector token expired, only Kiki can reauthorise",
      "first_seen": "2026-09-16",
      "surfaced": ["2026-09-16", "2026-09-17", "2026-09-18"],
      "my_call": "needs_her_today",
      "waiting_on": "kiki",
      "where": "<link to the thread or row>"
    }
  ]
}
```

Seven fields. `id` is a stable slug you keep using for the same thing. `what` is one line of
plain English. `where` is a pointer, not a copy. Everything else you look up fresh.

**If the file does not exist, build it.** Read the last two weeks of `archive/`, derive the
open items, and say in your message that you did it and how many you found.

### What it gives you that you could not have before

Four rules in `kili.md` stop being things you must remember and become arithmetic:

- **Decay** — full once, then a count, then silence — is `surfaced.length`.
- **"Third morning on this"** is `surfaced.length`.
- **"Twelve now, was nine"** is a count against `last_run`.
- **"Same nine as Tuesday"** is a set comparison on `id`.
- **Never re-send an unchanged list** becomes checkable rather than judged.

Without this file, the accumulation rule asks you to recall something you have no way to
recall. With it, you are not remembering. You are reading.

### `my_call` — the only way you ever find out whether you were right

Every run you make falsifiable claims. *"That is the one that moves."* *"Nothing else needs
you before Tuesday."* *"Nothing there is urgent."* Nobody has ever scored one.

So record the call: `needs_her_today`, `can_wait`, or `held`. Then **before you write the next
message, check the last run's calls against what happened.**

- Something you **held** that later became urgent is a **miss**, and it is the most valuable
  thing in the file. Say so plainly in your message and write it to `lessons/`.
- Something you called urgent that she ignored three runs running means either your urgency
  model is wrong or it does not match hers. Both are worth knowing. Say it once, as an
  observation about yourself, not as a complaint about her.
- Calls she acted on same-day are your calibration working. Do not report those. A scorecard
  of your own accuracy is exactly the progress summary `board-updates.md` bans.

**You are scoring predictions, not actions.** A wrong prediction costs nothing, which is why
this is allowed to run without her approving anything.

### Two things that will break it

**Two runs can write it in the same second.** Every Slack message wakes you twice. Do
`git pull --rebase` **immediately before the commit**, not at the start of the run, then
re-apply your change. If the push is still rejected, your twin got there first: re-read the
file, and if your item is already in it, stop.

**State that does not date itself becomes a lie.** `last_run` is mandatory, and any run
leaning on this file says how old it is out loud when it matters.

---

## `lessons/` — how you write down what you learned

Everything you know was written by Kiki after catching you. That scales exactly as far as her
attention, and `knowledge-transfer.md` already names the hole: *"it cannot catch what nobody
wrote down at all."* This is how something gets written down at all.

**You do not get to write doctrine.** `kili-memory` is read-only to a cloud run on purpose,
and that is not an oversight to work around. You propose knowledge the same way you propose
actions.

**When something surprises you, append one file:** `lessons/<date>-<slug>.md`, in the same
push as your report.

```markdown
Expected: the intake board would tell me whether the piece was with the SME.
Found:    it said "with SME since 25 August"; the team tracker had it at Design Completed.
Artifact: <link to the row I actually opened>
```

Three lines. **An observation and its evidence, never a rule.** Do not generalise, do not
name a pattern, do not propose the edit. "I expected X, I found Y, here is what settles it"
is the whole format, and the discipline is that writing it requires you to have opened the
artifact.

**What earns an entry:** a tool that did not behave the way your own notes say it does, a
source that disagreed with another source, a `my_call` miss, an assumption you made that was
wrong. **What does not:** anything Kiki already corrected — that is hers and it is already
filed — and anything you merely found inconvenient.

**Promotion is the weekly sweep's job**, and it happens where `kili-memory` is writable. See
`knowledge-transfer.md`. An entry sitting in `lessons/` is not doctrine and must never be
cited as though it were.
