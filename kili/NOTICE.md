# Kili

**Kili is Kiki's AI sidekick.** She is the assistant, not any of the files here.

This folder holds the plumbing she reaches Kiki through. It is not her.

```
kili/
  channels/        how she reaches Kiki. Plural on purpose, and swappable.
    slack-app/     today's channel. Slack app "Kili", app id A0BP33M5VUH.
  _archive/        abandoned attempts, kept for the record, not for use.
    selfhosted-2026-08/
```

## Naming rule

**Never name a folder, repo, or project after the channel she uses.** This folder
was called `kili-whatsapp` until 2026-08-10. WhatsApp had already been abandoned
weeks earlier, so the name was a lie on disk and it sent a later session hunting
in the wrong place. `kili-slack` was proposed as the fix and Kiki rejected it for
the same reason: the channel she uses to reach Kiki can be anything. Channels come
and go. She does not.

## Where Kili actually lives

Not here. She runs in three places, none of which are her either:

- **`.claude/agents/kili.md`**, the subagent definition, used inside a Claude
  session with Kiki's own connectors.
- **Two claude.ai cloud routines**, which run her sweep on a schedule and DM the
  result. `trig_01Rw6Pmh4sgUZZKvGXoLgr6s` weekdays 08:00 IST,
  `trig_01WP42wSSgU77VmawCNHkrVR` Sundays 16:00 IST. List them with the
  `RemoteTrigger` tool. They can only be deleted at
  https://claude.ai/code/routines
- **`.claude/skills/kili/SKILL.md`**, the entry point when Kiki addresses her by
  name.

Subagents reporting to her are fine and expected: `scout` for intake, `brd-agent`
for BRDs. A subagent serving Kili is not Kili.

## Open, as of 2026-08-10

The scheduled ping arrives looking like it came from Kiki, because the routines
post through the claude.ai Slack connector which is authorised as her own user.
Kiki wants it to read like a separate person pinging her. The fix lives in
`channels/slack-app/README.md`.
