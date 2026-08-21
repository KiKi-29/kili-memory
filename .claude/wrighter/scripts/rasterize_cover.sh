#!/usr/bin/env bash
# rasterize_cover.sh — render a branded cover HTML to PNG and emit base64.
#
# Produces the featured_image_base64 value the CUBE84 Blog Publisher MCP requires.
#
# Usage:
#   rasterize_cover.sh <cover.html> [out.png] [width] [height]
#
# Defaults: out=<cover>.png, 1200x630 (OG/featured ratio), 2x device scale.
# Prints the base64 (no newlines) of the PNG to stdout. The PNG is also kept at out.png.
#
# Requires Google Chrome (headless). Falls back to `sips` note if Chrome is absent.
set -euo pipefail

IN="${1:?usage: rasterize_cover.sh <cover.html> [out.png] [width] [height]}"
OUT="${2:-${IN%.html}.png}"
W="${3:-1200}"
H="${4:-630}"

if [[ ! -f "$IN" ]]; then
  echo "rasterize_cover.sh: input HTML not found: $IN" >&2
  exit 1
fi

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [[ ! -x "$CHROME" ]]; then
  # Try common alternates before giving up.
  for alt in \
    "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary" \
    "/Applications/Chromium.app/Contents/MacOS/Chromium" \
    "$(command -v chrome-headless-shell 2>/dev/null || true)" \
    "$(command -v chromium 2>/dev/null || true)"; do
    if [[ -n "$alt" && -x "$alt" ]]; then CHROME="$alt"; break; fi
  done
fi

if [[ ! -x "$CHROME" ]]; then
  echo "rasterize_cover.sh: Google Chrome not found. Install Chrome or adapt this script." >&2
  exit 2
fi

# Resolve to an absolute file:// URL.
ABS="$(cd "$(dirname "$IN")" && pwd)/$(basename "$IN")"

# Fresh temp profile keeps headless runs isolated and repeatable.
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

"$CHROME" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --hide-scrollbars \
  --no-first-run \
  --no-default-browser-check \
  --disable-extensions \
  --disable-background-networking \
  --disable-sync \
  --disable-default-apps \
  --force-device-scale-factor=2 \
  --window-size="${W},${H}" \
  --user-data-dir="$PROFILE" \
  --default-background-color=00000000 \
  --virtual-time-budget=5000 \
  --screenshot="$OUT" \
  "file://${ABS}" >/dev/null 2>&1

if [[ ! -f "$OUT" ]]; then
  echo "rasterize_cover.sh: screenshot failed; no output produced." >&2
  exit 3
fi

# Emit as a data URI — the CUBE84 Blog Publisher MCP rejects a bare base64 string
# ("Invalid base64 image format") and requires the data:<mime>;base64, prefix.
printf 'data:image/png;base64,'
base64 -i "$OUT" | tr -d '\n'
