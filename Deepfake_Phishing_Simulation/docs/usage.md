# Usage and Deployment Guide

## Video Demo
- The video demo will be created using deepfake video and voice cloning tools.
- Place the final video file in the `demo/video/` folder as `ceo_video.mp4`.
- Use any media player to play the video demo for presentations or training.

## Interactive Prototype
- The prototype is a simple web page located in `prototype/index.html`.
- To run locally, open `index.html` in any modern web browser.
- The prototype plays the deepfake video and voice simulation and shows verification tips.
- Replace the placeholder video and audio files in the `demo/audio/` and `demo/video/` folders with your generated deepfake assets named `ceo_voice.mp3` and `ceo_video.mp4` respectively.

## Tools and APIs
- Use DeepFaceLab, Synthesia, or HeyGen for video generation.
- Use ElevenLabs or Resemble AI for voice cloning.
- Video editing tools like Adobe Premiere or DaVinci Resolve can be used for compositing.

## Deployment
- The prototype can be hosted on any static web hosting service (GitHub Pages, Netlify, etc.).
- For more advanced interactive features, consider converting the prototype to a web app using React or Flask.

## Ethical Considerations
- Always use consented or synthetic data.
- Clearly label all demos as simulations.
- Educate users on the risks and detection of deepfake phishing attacks.

