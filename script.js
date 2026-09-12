const messages = [
    "Hello Laddoo ❣️💫",
    "Meri chhoti si Laddoo ke liye ek chhota sa surprise... 🐱💗",
    "Big brother ne kuch special banaya hai... ✨"
];

let messageIndex = 0;
let charIndex = 0;
const typingSpeed = 70;
const textElement = document.getElementById("typing-text");
const passwordArea = document.getElementById("password-area");

// Typing Animation Logic
function typeText() {
    if (charIndex < messages[messageIndex].length) {
        textElement.innerHTML += messages[messageIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(nextMessage, 1500);
    }
}

function nextMessage() {
    messageIndex++;
    if (messageIndex < messages.length) {
        textElement.innerHTML = "";
        charIndex = 0;
        typeText();
    } else {
        // Show password input after all messages
        passwordArea.style.display = "block";
        passwordArea.style.animation = "fadeIn 1s forwards";
    }
}

// Start typing on load
window.onload = typeText;

// Password Validation
function checkPassword() {
    const input = document.getElementById("password-input").value;
    const errorMsg = document.getElementById("error-msg");
    const kitten = document.querySelector(".kitten");

    if (input === "Shivubhai") {
        // Success Logic
        errorMsg.style.color = "#4cd137";
        errorMsg.innerText = "Yay! Correct! 💖";
        kitten.style.animation = "float 0.5s ease-in-out infinite"; // Happy jump
        
        createHearts(); // Trigger celebration

        setTimeout(() => {
            alert("Happy Birthday Laddoo! 🎂 (The rest of the surprise is loading...)");
            // Here you would transition to the main content page
            document.getElementById('welcome-screen').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('welcome-screen').style.display = 'none';
                document.getElementById('birthday-hub').style.display = 'block';
            }, 1000);
        }, 1500);

    } else {
        // Wrong Password
        errorMsg.innerText = "Oye Laddoo! Sahi password dalo! 😂 Try again 🐱";
        document.getElementById("password-input").value = "";
        
        // Shake animation
        const card = document.querySelector(".glass-card");
        card.style.animation = "none";
        setTimeout(() => {
            card.style.animation = "shake 0.5s ease-in-out";
        }, 10);
    }
}

// Visual Heart Shower
function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💗";
        heart.className = "particle";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heart.style.animationDuration = Math.random() * 2 + 2 + "s";
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }
}