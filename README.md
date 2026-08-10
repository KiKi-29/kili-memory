# Kili's memory

Kili is Kiki's AI sidekick. This repo is her memory, not her code and not a backup
of anything.

It exists because her scheduled runs happen in a bare cloud sandbox with no
filesystem of their own. Before this repo, the routine Kili and the in-session Kili
had **different memories**, and the routine had the worse one. Decisions Kiki made
in conversation never reached the version of Kili that pings her at 08:00, so it
kept raising settled questions. One memory, many bodies, is the point.

## Read this first, every run

- `.claude/knowledge/intake/routing.md` — where a caught request goes, and the
  genres that deliberately go nowhere
- `.claude/knowledge/intake/detection.md` — how to tell a real request from noise,
  and the traps that have already produced wrong answers
- `.claude/knowledge/intake/handled.md` — **what is already dealt with, closed, or
  parked. Check this before surfacing anything.** Re-raising a closed item is the
  most common way to waste Kiki's morning.
- `.claude/knowledge/crm/salesforce-pardot.md` — write rules and the silent-failure
  trap
- `.claude/knowledge/people/working-with-teams.md` — who does what
- `.claude/knowledge/channels/slack.md` — how she reaches Kiki, and why that DM is
  one-way on purpose
- `.claude/knowledge/audiences/` — housing and higher ed context

## Also here

`.claude/agents/` holds her own definition and her specialists, `scout` for intake
and `brd-agent` for BRDs. `kili/NOTICE.md` says what Kili is and, more usefully,
what she is not.

## Deny by default

`.gitignore` ignores everything and adds back only these paths. The working folder
this repo sits in holds real client PII, prospect names, emails, deal values and
call transcripts, plus large media. None of that belongs here. A new file is
invisible to git until somebody deliberately allows it.

Before widening the allowlist, ask two questions: does Kili need to read it, and
does it name a client.

## No credentials, ever

Nothing in here holds a token, key or password, and it must stay that way. Kili's
Slack bot token lives in her routine prompts, which are in Kiki's Anthropic
account, not on disk and not in git.
