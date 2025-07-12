# Asset Generation Instructions

## Voice Audio Generation Using ElevenLabs API (Manual)

1. Sign up or log in to ElevenLabs: https://elevenlabs.io/
2. Obtain your API key from the ElevenLabs dashboard.
3. Use the following example Python script to generate voice audio from the CEO phishing script:

```python
import requests

API_KEY = 'your_elevenlabs_api_key_here'
VOICE_ID = 'EXAVITQu4vr4xnSDxMaL'  # Example voice ID, replace with desired voice
SCRIPT_PATH = 'demo/scripts/ceo_wire_transfer_script.txt'
OUTPUT_PATH = 'demo/audio/ceo_voice.mp3'

with open(SCRIPT_PATH, 'r') as file:
    text = file.read()

url = f'https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}'

headers = {
    'xi-api-key': API_KEY,
    'Content-Type': 'application/json'
}

data = {
    'text': text,
    'voice_settings': {
        'stability': 0.75,
        'similarity_boost': 0.75
    }
}

response = requests.post(url, json=data, headers=headers)

if response.status_code == 200:
    with open(OUTPUT_PATH, 'wb') as f:
        f.write(response.content)
    print(f'Voice audio saved to {OUTPUT_PATH}')
else:
    print(f'Error: {response.status_code} - {response.text}')
```

4. Replace `'your_elevenlabs_api_key_here'` with your actual API key.
5. Run the script to generate the voice audio file.
6. The output file will be saved as `demo/audio/ceo_voice.mp3`.

## Deepfake Video Creation Using HeyGen or Synthesia

### Using HeyGen:
1. Sign up or log in to HeyGen: https://heygen.com/
2. Choose a synthetic avatar that resembles a professional executive.
3. Upload the generated voice audio file (`demo/audio/ceo_voice.mp3`) as the audio input.
4. Input the CEO phishing script text or use the audio for lip-sync.
5. Generate the video and download it.
6. Save the video as `demo/video/ceo_video.mp4`.

### Using Synthesia:
1. Sign up or log in to Synthesia: https://www.synthesia.io/
2. Select a professional avatar.
3. Upload or paste the CEO phishing script text.
4. Upload the voice audio or use Synthesia's text-to-speech.
5. Generate and download the video.
6. Save the video as `demo/video/ceo_video.mp4`.

## Notes
- Use publicly available avatars or synthetic data for demonstration.
- Ensure all generated content is clearly labeled as simulated.
- Replace the placeholder files in the prototype with the generated audio and video files.
