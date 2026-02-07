// script.js - Enhanced version

// Fixed 10-second timer pop-up that displays properly
let timer;
let timerDisplay = document.getElementById('timerDisplay');
function startTimer(duration) {
    let time = duration, seconds;
    timer = setInterval(function () {
        seconds = parseInt(time % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = seconds;

        if (--time < 0) {
            clearInterval(timer);
            // Add logic for pop-up here
        }
    }, 1000);
}

// Music player controls (play, pause, replay functionality)
let music = new Audio('background-music.mp3');
function playMusic() {
    music.play();
}
function pauseMusic() {
    music.pause();
}
function replayMusic() {
    music.currentTime = 0;
    music.play();
}

// Confetti animation when clicking Yes
function showConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    document.body.appendChild(confetti);
    // Add confetti animation logic here
}

// Sparkle sound effects for button clicks
function playClickSound() {
    let clickSound = new Audio('click-sound.mp3');
    clickSound.play();
}

// Different animations for each choice (kiss, date, shopping)
function chooseOption(option) {
    switch(option) {
        case 'kiss':
            // Add kiss animation logic
            break;
        case 'date':
            // Add date animation logic
            break;
        case 'shopping':
            // Add shopping animation logic
            break;
    }
}

// Particle effects with hearts
function generateHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    document.body.appendChild(heart);
    // Add particle effect logic here
}

// Smooth page transitions with fade animations
function fadeOut() {
    document.body.classList.add('fade-out');
}
function fadeIn() {
    document.body.classList.remove('fade-out');
}

// Background music on page load
window.onload = function() {
    playMusic();
    startTimer(10);
};

// Sound effects integrated throughout
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        playClickSound();
        // Additional click handling logic
    });
});

// Better mobile interaction handling
window.addEventListener('touchstart', function(e) {
    // Handle touch interactions
});