// Close initial pop-up
function closePopup() {
    document.getElementById('popup').classList.add('hidden');
    generateHearts();
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

// Select Yes
function selectYes() {
    const audio = document.getElementById('loveAudio');
    audio.play().catch(error => console.log('Audio play error:', error));
    
    document.getElementById('countdownPopup').classList.add('hidden');
    
    movePage(2);
}

// Select choice on page 2
function selectChoice(choice) {
    console.log('You selected:', choice);
    if (choice === 'kiss') {
        alert('💋 Kiss me! How romantic! 💕');
    } else if (choice === 'date') {
        alert('🌹 A romantic date! How wonderful! 💕');
    } else if (choice === 'shopping') {
        alert('🛍️ Shopping time! How fun! 💕');
    }
}

// Move between pages
function movePage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById('page' + pageNumber).classList.add('active');
}
