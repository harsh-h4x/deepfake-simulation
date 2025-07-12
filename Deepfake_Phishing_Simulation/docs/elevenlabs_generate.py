"""Generate voice audio from script using ElevenLabs TTS API.

Usage:
    export XI_API_KEY=<your_key>
    python docs/elevenlabs_generate.py

The script reads text from demo/scripts/ceo_wire_transfer_script.txt and saves the
MP3 to demo/audio/ceo_voice.mp3.
"""
import os
import pathlib
import requests

API_KEY = os.getenv("XI_API_KEY")
VOICE_ID = "EXAVITQu4vr4xnSDxMaL"  # Default ElevenLabs English voice; customise if needed.
SCRIPT_PATH = pathlib.Path(__file__).resolve().parent.parent / "demo/scripts/ceo_wire_transfer_script.txt"
OUTPUT_PATH = pathlib.Path(__file__).resolve().parent.parent / "demo/audio/ceo_voice.mp3"

if not API_KEY:
    raise EnvironmentError("Set XI_API_KEY environment variable with your ElevenLabs API key.")

text = SCRIPT_PATH.read_text(encoding="utf-8")
url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

data = {
    "text": text,
    "voice_settings": {"stability": 0.75, "similarity_boost": 0.75},
}
headers = {"xi-api-key": API_KEY, "Content-Type": "application/json"}

print("Requesting ElevenLabs TTS…")
resp = requests.post(url, json=data, headers=headers, timeout=60)
resp.raise_for_status()

OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
OUTPUT_PATH.write_bytes(resp.content)
print(f"✅ Voice audio saved to {OUTPUT_PATH.relative_to(pathlib.Path.cwd())}")
