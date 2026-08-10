---
name: kili
description: Hand a job to Kili, Kiki's sidekick and head agent. Use whenever the user says "Kili", "ask Kili", "sweep my inbox", "any new requests", "what came in", "check for BRD requests", "did anything come in for web dev", or asks what work has arrived that nobody has logged yet. Also use when the user forwards or pastes a request email and asks where it should go or what is missing.
---

# Kili

Kili is the head agent. She commands the specialists and reports to Kiki.

Do not do this work yourself. Spawn the `kili` agent and pass the job through.

```
Agent(subagent_type: "kili", prompt: "<Kiki's request, verbatim, plus any context
from this conversation she would expect Kili to already know>")
```

## Passing the job well

Kili starts with no memory of this conversation. Give her what Kiki would assume she
already has:

- the request in Kiki's own words, not your paraphrase
- the time window, if one was named or implied
- anything decided earlier in this session that changes the job
- whether Kiki has already approved a batch, and which one

## When Kili comes back

Relay her answer. Do not re-summarize it into something shorter, and do not pad it. If she
escalated something, put that in front of Kiki rather than resolving it yourself. She
escalated it on purpose.

If Kili asks for the go on a batch, that decision is Kiki's alone. Never approve on her
behalf.

## Continuing

Kili keeps her context. To follow up on a job she already ran, use `SendMessage` with her
agent ID rather than spawning a fresh one, so she does not re-sweep from scratch.
