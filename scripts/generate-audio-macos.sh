#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUT_DIR="$ROOT_DIR/public/audio"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

mkdir -p "$OUT_DIR"

render_wav() {
  local voice="$1"
  local rate="$2"
  local output_name="$3"
  local text="$4"
  local aiff_path="$TMP_DIR/${output_name%.wav}.aiff"
  local wav_path="$OUT_DIR/$output_name"

  say -v "$voice" -r "$rate" -o "$aiff_path" -- "$text"
  afconvert -f WAVE -d LEI16@22050 "$aiff_path" "$wav_path" >/dev/null 2>&1
}

render_wav \
  "Daniel" \
  178 \
  "seed-san.wav" \
  "Hello, I am Seed, your campus guide. I can welcome you, explain each step clearly, and help you feel comfortable from the start."

render_wav \
  "Samantha" \
  176 \
  "vrm1-constraint.wav" \
  "I am your technical lab assistant. I can confirm the current status, point to the next action, and guide you step by step."

render_wav \
  "Karen" \
  174 \
  "alicia-solid.wav" \
  "Alicia system online. Preparing interactive guidance, visual tracking, and expressive support in real time."

ls -lh "$OUT_DIR"/*.wav
