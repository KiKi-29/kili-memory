# The routine prompt change

Both routines currently carry this, near the end of the `## Report` section:

> Send Kiki a Slack DM to user U09H14LEXHA.

That single line is what makes the ping arrive as Kiki, because the model
satisfies it with the claude.ai Slack connector, which is authorised as her own
user. Replace it with the block below, in **both** routines.

`trig_01Rw6Pmh4sgUZZKvGXoLgr6s` (weekdays 08:00 IST)
`trig_01WP42wSSgU77VmawCNHkrVR` (Sundays 16:00 IST)

---

## Replacement block

```
## How to send it

Send the report as a Slack DM from Kili, using the bot token below and Bash. Do
NOT use the Slack MCP connector for this. The connector posts as Kiki herself,
which defeats the point. If either call below fails, say so in your final output
and stop. Never fall back to the connector.

SLACK_BOT_TOKEN: <PASTE THE xoxb- TOKEN HERE>

Two calls. First open the DM channel:

curl -sS -X POST https://slack.com/api/conversations.open \
  -H "Authorization: Bearer $TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{"users":"U09H14LEXHA"}'

Slack answers HTTP 200 even when it refuses, so check the "ok" field in the body,
not the status code. Take "channel":{"id":...} from the response, then post:

curl -sS -X POST https://slack.com/api/chat.postMessage \
  -H "Authorization: Bearer $TOKEN" \
  -H 'Content-Type: application/json' \
  -d '{"channel":"<channel id>","text":"<your report>","unfurl_links":false,"unfurl_media":false}'

Check "ok" on this one too.

Formatting matters here. Slack's text field uses mrkdwn, not standard markdown.
Bold is *one* asterisk, not two. Double asterisks render as literal asterisks and
look broken. Italic is _underscores_. There are no headings, so lead a section
with a bold line. Keep link unfurling off, an unfurled monday or Salesforce
preview leaks the contents of whatever it points at into the DM.
```

---

## Why the token sits in the prompt

A cloud routine runs in Anthropic's cloud, so it cannot read anything from Kiki's
Mac, and the routine config has no secrets field. The prompt is the only place the
token can live. Rotate it in Slack if it is ever exposed.

The exposure is narrower than it sounds. A bot token's `im:history` and `im:read`
cover only conversations the bot is in, so this token cannot read Kiki's DMs with
anyone else. On a leak someone could read the Kili thread and post as Kili.

## Verify before editing anything

Run `test-send.py` in this folder first. If that lands as Kili, the token is right
and the routine edit is safe to make.

## After switching over

Watch the first real run. If the ping arrives with literal `**` around headings,
the mrkdwn instruction did not take and needs strengthening in the prompt.
