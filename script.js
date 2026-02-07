// script.js - Enhanced version


document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENT REFERENCES
    ========================== */
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const popup = document.getElementById("popup");
    const popupBtn = document.querySelector(".popup-btn");
    const countdownPopup = document.getElementById("countdownPopup");
    const timerDisplay = document.getElementById("timerDisplay");

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    const bgMusic = document.getElementById("backgroundMusic");
    const heartsContainer = document.getElementById("hearts-container");

    let noHoverCount = 0;
    let timer;
    let timeLeft = 10;

    /* =========================
       POPUP FIX (Let’s Go button)
    ========================== */
    popupBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
        startTimer();
    });

    /* =========================
       TIMER
    ========================== */
    function startTimer() {
        countdownPopup.classList.remove("hidden");
        timerDisplay.textContent = timeLeft;

        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(timer);
            }
        }, 1000);
    }

    /* =========================
       YES BUTTON
    ========================== */
    window.selectYes = function () {
        clearInterval(timer);
        countdownPopup.classList.add("hidden");

        // Start music ONLY after user interaction (browser rule)
        bgMusic.play().catch(() => {});

        // Confetti 🎉
        confetti({
            particleCount: 180,
            spread: 100,
            origin: { y: 0.6 }
        });

        // Switch pages
        page1.classList.remove("active");
        page2.classList.add("active");
    };

    /* =========================
       NO BUTTON LOGIC
    ========================== */
    window.moveNoButton = function () {
        noHoverCount++;

        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        noBtn.style.position = "absolute";
        noBtn.style.left = ${x}px;
        noBtn.style.top = ${y}px;

        // Shrink each hover 😈
        const scale = Math.max(0.5, 1 - noHoverCount * 0.06);
        noBtn.style.transform = scale(${scale});
    };

    window.handleNoClick = function () {
        alert("Are you 100% sure? 😏");
    };

    /* =========================
       CHOICE BUTTONS
    ========================== */
    window.selectChoice = function (choice) {
        if (choice === "kiss") {
            alert("💋 Come here… this was inevitable 😘");
        } 
        else if (choice === "date") {
            alert("🌹 Date locked in! Dinner, dessert & cuddles 💕");
        } 
        else {
            alert("🛍️ Shopping spree unlocked! Wallet crying already 😂");
        }
    };

    /* =========================
       FLOATING HEARTS
    ========================== */
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 5 + Math.random() * 5 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 10000);
    }, 600);

});
