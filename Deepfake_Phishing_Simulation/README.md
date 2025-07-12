# Deepfake Video and Voice Phishing Attack Simulation

## Objective
Simulate a deepfake-based phishing attack where an executive or trusted individual is impersonated using AI-generated voice and/or video. The goal is to demonstrate the risks of social engineering and train users on verification and awareness.

## Deliverables
- A complete video demo showing a deepfake video and voice impersonation (e.g., a CEO asking for urgent money transfer or sensitive data).
- An optional interactive prototype (web or desktop app) simulating the attack and follow-up verification.
- Documentation covering tools, architecture, attack flow, and countermeasures.

## Technology Stack
- Deepfake video generation: DeepFaceLab, Synthesia, HeyGen, or similar tools.
- Voice cloning: ElevenLabs, Resemble AI, or similar APIs.
- Interactive prototype: Python (Flask) or Web stack (JavaScript, HTML, CSS).
- Video editing and compositing tools as needed.

## Project Structure
- `demo/` - Video demo assets and final video.
- `prototype/` - Interactive simulation code.
- `docs/` - Documentation including architecture and attack flow.
- `README.md` - Project overview and instructions.

## Next Steps
1. Prepare scripts and assets for deepfake video and voice generation.
2. Generate deepfake video and voice samples.
3. Develop the interactive prototype to simulate the attack and verification.
4. Document the architecture, attack flow, and countermeasures.

## Notes
- This project is for educational and demonstration purposes only.
- Ensure ethical use and obtain necessary permissions for any real data or likeness used.

---

## Media Asset Generation

Follow `docs/instructions.md` for full details. In short:

1. **Clone the voice** with ElevenLabs (or run `python docs/elevenlabs_generate.py` after setting your `XI_API_KEY`).
2. **Generate the video** using HeyGen/Synthesia and the voice track.
3. Save the outputs exactly as:
   - `demo/audio/ceo_voice.mp3`
   - `demo/video/ceo_video.mp4`

The prototype auto-loads these files when you click **Simulate Attack**.

## Running Locally

```bash
# No build-step needed – just open the file
open prototype/index.html
```

## Deploying to Netlify

1. Create a free Netlify account.
2. Drag-and-drop the entire project folder (or push to Git and "Import" it).
3. Netlify detects the `netlify.toml` and serves the site from the root with no build command.
4. Your live URL will be in the form `https://<subdomain>.netlify.app`.

> We also provide an automated deploy script – run `python tools/deploy_netlify.py` once you have a Netlify access token set in `NETLIFY_AUTH_TOKEN`.

Happy simulating!

