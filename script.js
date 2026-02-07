// script.js - Enhanced version

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENT REFERENCES
    ========================== */
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const popup = document.getElementById("popup");
    const countdownPopup = document.getElementById("countdownPopup");
    const timerDisplay = document.getElementById("timerDisplay");

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    const bgMusic = document.getElementById("backgroundMusic");

    let noHoverCount = 0;
    let timer;
    let timeLeft = 10;

    /* =========================
       POPUP
    ========================== */
    window.closePopup = function () {
        popup.classList.add("hidden");
        startTimer();
    };

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

        // Play music ONLY after click (browser rule)
        bgMusic.play();

        // Confetti 🎉
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });

        // Switch page
        page1.classList.remove("active");
        page2.classList.add("active");
    };

    /* =========================
       NO BUTTON BEHAVIOR
    ========================== */
    window.moveNoButton = function () {
        noHoverCount++;

        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        noBtn.style.position = "absolute";
        noBtn.style.left = ${x}px;
        noBtn.style.top = ${y}px;

        // Shrink each time 😈
        const scale = Math.max(0.5, 1 - noHoverCount * 0.05);
        noBtn.style.transform = scale(${scale});
    };

    window.handleNoClick = function () {
        alert("Are you 100% sure? 😏");
    };

    /* =========================
       CHOICES
    ========================== */
    window.selectChoice = function (choice) {
        if (choice === "kiss") {
            alert("💋 Come hereee!");
        } else if (choice === "date") {
            alert("🌹 Dinner, movie & dessert planned!");
        } else {
            alert("🛍️ Wallet crying already 😂");
        }
    };

    /* =========================
       FLOATING HEARTS
    ========================== */
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerText = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 5 + Math.random() * 5 + "s";
        document.getElementById("hearts-container").appendChild(heart);

        setTimeout(() => heart.remove(), 10000);
    }, 500);

});
