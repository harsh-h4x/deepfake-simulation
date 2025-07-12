const simulateAttackBtn = document.getElementById('simulateAttackBtn');
const resetBtn = document.getElementById('resetBtn');
const messageDiv = document.getElementById('message');
const verificationDiv = document.getElementById('verification');
const engageDiv = document.getElementById('engage');
const video = document.getElementById('phishingVideo');
const audio = document.getElementById('phishingAudio');

simulateAttackBtn.addEventListener('click', () => {
  // Start playback
  video.play();
  audio.play();

  // Reveal awareness sections
  messageDiv.style.display = 'block';
  verificationDiv.style.display = 'block';
  engageDiv.style.display = 'block';

  // Adjust buttons
  simulateAttackBtn.disabled = true;
  resetBtn.disabled = false;
});

resetBtn.addEventListener('click', () => {
  // Stop playback & rewind
  video.pause();
  audio.pause();
  video.currentTime = 0;
  audio.currentTime = 0;

  // Hide awareness sections
  messageDiv.style.display = 'none';
  verificationDiv.style.display = 'none';
  engageDiv.style.display = 'none';

  // Reset UI state
  simulateAttackBtn.disabled = false;
  resetBtn.disabled = true;

  // Reset quiz selection & feedback
  document.querySelectorAll('input[name="suspicious"]').forEach(el => (el.checked = false));
  const feedback = document.getElementById('feedback');
  feedback.textContent = '';
});

// Quiz logic
const quizForm = document.getElementById('quizForm');
quizForm.addEventListener('submit', e => {
  e.preventDefault();
  const choice = quizForm.elements['suspicious'].value;
  const feedback = document.getElementById('feedback');
  if (choice === 'yes') {
    feedback.textContent = 'Correct! Always treat unusual urgent requests with caution.';
    feedback.style.color = '#155724';
  } else {
    feedback.textContent = 'Remember to verify unexpected requests before acting.';
    feedback.style.color = '#721c24';
  }
});
