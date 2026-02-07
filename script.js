// script.js - Enhancements

// Fixed 10-second timer pop-up
let timer;
function startTimer(duration, display) {
    timer = duration;
    const interval = setInterval(() => {
        let seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = seconds;
        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = 'Time is up!';
            // Trigger pop-up here
        }
    }, 1000);
}

// Music player controls
const audio = new Audio('background-music.mp3'); // Ensure the audio file is present
function playMusic() { audio.play(); }
function pauseMusic() { audio.pause(); }
function replayMusic() { audio.currentTime = 0; playMusic(); }

document.getElementById('playButton').onclick = playMusic;
document.getElementById('pauseButton').onclick = pauseMusic;
document.getElementById('replayButton').onclick = replayMusic;

// Sound effects for button clicks
function playClickSound() {
    const clickSound = new Audio('click-sound.mp3');
    clickSound.play();
}

// Confetti animation when clicking Yes
function showConfetti() {
    // Implement confetti effect here
}

document.getElementById('yesButton').onclick = () => {
    playClickSound();
    showConfetti();
};

// Sparkle effects function
function showSparkleEffect() {
    // Implement sparkle effect here
}

// Different animations for each choice on page 2
const choices = document.querySelectorAll('.choice');
choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        playClickSound();
        // Apply different animation based on choice
        // Implement animation here
    });
});

// Particle effects
function showParticles() {
    // Implement particle effect here
}

// Smooth page transitions
function smoothTransition(newPage) {
    // Implement smooth transition here, e.g., fade out current page and fade in new page
}

// Background music on page load
window.onload = function() {
    playMusic();
    const timerDisplay = document.getElementById('timer');
    startTimer(10, timerDisplay);
};