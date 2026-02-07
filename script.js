// Close initial pop-up
function closePopup() {
    document.getElementById('popup').classList.add('hidden');
    generateHearts();
    playBackgroundMusic();
}


// Generate floating hearts
function generateHearts() {
    const container = document.getElementById('hearts-container');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = (5 + Math.random() * 3) + 's';
        heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
        container.appendChild(heart);

        setTimeout(() => heart.remove(), 8000);
    }, 300);
}

// Music Player Functions
function playBackgroundMusic() {
    const bgMusic = document.getElementById('backgroundMusic');
    bgMusic.volume = 0.3;
    bgMusic.play().catch(error => console.log('Background music play error:', error));
}

document.getElementById('playButton').addEventListener('click', function() {
    const bgMusic = document.getElementById('backgroundMusic');
    bgMusic.play().catch(error => console.log('Play error:', error));
    playClickSound();
});

document.getElementById('pauseButton').addEventListener('click', function() {
    const bgMusic = document.getElementById('backgroundMusic');
    bgMusic.pause();
    playClickSound();
});

document.getElementById('replayButton').addEventListener('click', function() {
    const bgMusic = document.getElementById('backgroundMusic');
    bgMusic.currentTime = 0;
    bgMusic.play().catch(error => console.log('Replay error:', error));
    playClickSound();
});

// Play Click Sound Effect (Sparkle Sound)
function playClickSound() {
    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}


// Move No button away from mouse
let noClickCount = 0;
let countdownStarted = false;

function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 150);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function handleNoClick() {
    noClickCount++;
    const noBtn = document.getElementById('noBtn');
    
    const currentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
    noBtn.style.fontSize = (currentSize * 0.85) + 'px';
    
    playClickSound();
    
    if (!countdownStarted) {
        countdownStarted = true;
        startCountdown();
    }
}



// Countdown timer
function startCountdown() {
    const popup = document.getElementById('countdownPopup');
    popup.classList.remove('hidden');
    
    let timeLeft = 10;
    const timerInterval = setInterval(() => {
        document.getElementById('timer').textContent = timeLeft;
        document.getElementById('timerDisplay').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            popup.classList.add('hidden');
            selectYes();
        }
        timeLeft--;
    }, 1000);
}

// Select Yes - with Confetti
function selectYes() {
    playClickSound();
    
    // Play main love song
    const audio = document.getElementById('loveAudio');
    audio.currentTime = 0;
    audio.play().catch(error => console.log('Audio play error:', error));
    
    // Trigger Confetti
    showConfetti();
    
    // Close countdown if active
    document.getElementById('countdownPopup').classList.add('hidden');

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

// Select choice on page 2 with different animations
function selectChoice(choice) {
    playClickSound();
    
    let message = '';
    if (choice === 'kiss') {
        message = '💋 Kiss me! How romantic! 💕';
        triggerChoiceAnimation('kiss');
    } else if (choice === 'date') {
        message = '🌹 A romantic date! How wonderful! 💕';
        triggerChoiceAnimation('date');
    } else if (choice === 'shopping') {
        message = '🛍️ Shopping time! How fun! 💕';
        triggerChoiceAnimation('shopping');
    }
    
    // Show result with confetti
    showConfetti();
    alert(message);
}

function triggerChoiceAnimation(choice) {
    const btn = document.querySelector(`.${choice}-animation`);
    if (btn) {
        btn.style.animation = 'none';
        setTimeout(() => {
            if (choice === 'kiss') {
                btn.style.animation = 'kissAnimation 0.6s ease-in-out';
            } else if (choice === 'date') {
                btn.style.animation = 'rotateAnimation 0.6s ease-in-out';
            } else if (choice === 'shopping') {
                btn.style.animation = 'swingAnimation 0.6s ease-in-out';
            }
        }, 10);
    }
}

// Move between pages with smooth transition
function movePage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById('page' + pageNumber).classList.add('active');
}

// Initialize on page load
window.addEventListener('load', function() {
    generateHearts();
});
