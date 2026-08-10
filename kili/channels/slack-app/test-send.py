#!/usr/bin/env python3
"""
Verify the Kili bot token can DM Kiki, before touching either routine.

The token is read from the environment and is never written to this file.

    SLACK_BOT_TOKEN='xoxb-...' python3 test-send.py

A successful run puts one message in your Slack from Kili, not from you. If the
sender still shows as you, the token is wrong: you used a user token (xoxp-)
instead of the Bot User OAuth Token (xoxb-).
"""

import json
import os
import sys
import urllib.request

KIKI = "U09H14LEXHA"
TOKEN = os.environ.get("SLACK_BOT_TOKEN", "")

if not TOKEN:
    sys.exit("Set SLACK_BOT_TOKEN='xoxb-...' before running.")
if not TOKEN.startswith("xoxb-"):
    sys.exit(f"That is not a bot token. It starts with {TOKEN[:5]!r}, expected 'xoxb-'.")


def call(method, payload):
    req = urllib.request.Request(
        f"https://slack.com/api/{method}",
        data=json.dumps(payload).encode(),
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Content-Type": "application/json; charset=utf-8",
        },
    )
    with urllib.request.urlopen(req) as r:
        body = json.loads(r.read())
    # Slack answers HTTP 200 even when it refused. `ok` is the only real signal.
    if not body.get("ok"):
        sys.exit(f"{method} failed: {body.get('error')}\nfull response: {body}")
    return body


channel = call("conversations.open", {"users": KIKI})["channel"]["id"]
print(f"DM channel: {channel}")

call(
    "chat.postMessage",
    {
        "channel": channel,
        # Slack's `text` field uses mrkdwn, NOT standard markdown.
        # Bold is *one* asterisk. Double asterisks render literally.
        "text": (
            "*Test from Kili*\n"
            "If this says Kili and not Kiki, the token works and the routines "
            "can be switched over."
        ),
        "unfurl_links": False,
        "unfurl_media": False,
    },
)
print("Sent. Check Slack: the sender should read Kili.")
