// Days together
const startDate = new Date("2025-06-14");
const today = new Date();
const diffTime = today - startDate;
const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("daysNumber").innerText = days;
document.getElementById("daysText").innerText =
       " and you still haven't dumped me. Yet."
  

// Love messages
function showLove() {
    const messages = [
        "I love you more than words can express.",
        "You are my sunshine on a cloudy day.",
        "Every moment with you is a treasure.",
        "You complete me in every way.",
        "I am so grateful to have you in my life."
    ];
    const random = messages[Math.floor(Math.random() * messages.length)];
    typeText("love", random);
}

// Memories
function showMemory() {
    const memories = [
        "Remember our first date at the park?",
        "That time we got caught in the rain together.",
        "Our trip to the beach last summer was unforgettable.",
        "I cherish every moment we spend together.",
        "You make every day feel like a special occasion."
    ];
    const random = memories[Math.floor(Math.random() * memories.length)];
    typeText("memory", random);
}

// Photos
function showPhoto() {
    const photos = [
        "images/Molly Aaron and Nell.jpg",
        "images/Molly and Aaron 1.jpg",
        "images/Molly and Aaron.jpg",
        "images/Molly and Nell.jpg",
    ];
    const random = photos[Math.floor(Math.random() * photos.length)];

    const img = document.getElementById("photo");
    img.src = random;
    img.style.display = "block";
}

// Letters
function openLetter(type) {
    let message = "";
    if (type === "sad") {
        message = "Even in tough times, my love for you remains strong.";
    }
    if (type === "miss") {
        message = "I miss you more than words can say.";
    }
    if (type === "sleep") {
        message = "Good night, my love. Sweet dreams.";
    }
    typeText("letterText", message);
}

// Navigation
function showSection(section) {
    const sections = ["menuSection", "daysSection", "loveSection", "memorySection", "photoSection", "lettersSection", "questionSection", "resultSection"];
    const music = document.getElementById("musicContainer");

        sections.forEach(id => {
            const el = document.getElementById(id);
            el.style.display = "none";
            el.classList.remove("active");
        });

        let targetId = "";
        if (section === "menu") targetId = "menuSection";
        if (section === "days") targetId = "daysSection";
        if (section === "love") targetId = "loveSection";
        if (section === "memory") targetId = "memorySection";
        if (section === "photo") targetId = "photoSection";
        if (section === "letters") targetId = "lettersSection";
        if (section === "question") targetId = "questionSection";
        if (section === "result") targetId = "resultSection";

        if (section === "question") {
            music.style.display = "none";
        } else {
            music.style.display = "block "
        }

        if (section === "question") {
            yesSize = 16;
            noClicks = 0;

            const yesButton = document.getElementById("yesButton");
            const noButton = document.getElementById("noButton");

            yesButton.style = "";
            yesButton.innerText = "Yes";

            noButton.style = "";
            noButton.innerText = "No (this won't go well)";
        }

        const target = document.getElementById(targetId);
        target.style.display = "block";

        setTimeout(() => {
            target.classList.add("active");
        }, 10);
    

    if (section === "days") {
        document.getElementById("daysSection").style.display = "block";
    }
    if (section === "love") {
        document.getElementById("loveSection").style.display = "block";
    }
    if (section === "memory") {
        document.getElementById("memorySection").style.display = "block";
    }
    if (section === "photo") {
        document.getElementById("photoSection").style.display = "block";
    }
    if (section === "letters") {
        document.getElementById("lettersSection").style.display = "block";
    }
    if (section === "question") {
        document.getElementById("questionSection").style.display = "block";
    }
    if (section === "result") {
        document.getElementById("resultSection").style.display = "block";
    }
}

// Typing text effect
function typeText(elementId, text) {
    let i = 0;
    const el = document.getElementById(elementId);
    el.innerText = "";

    const interval = setInterval(() => {
        if (i < text.length) {
            el.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, text[i] === " " ? 10 : 30);
}

// Days Section by default
window.onload = function() {
    showSection("menu");
}

// Music
function playMusic() {
    const music = document.getElementById("musicPlayer");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

//Grow Yes Button
let yesSize = 16;
let noClicks = 0;

function growYes() {
    noClicks++;
    yesSize += 4;
    
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");

    yesButton.style.fontSize = yesSize + "px";
    yesButton.style.padding = `${10 + noClicks * 2}px ${20 + noClicks * 5}px`;

    yesButton.style.flexGrow = noClicks;

    noButton.style.opacity = Math.max(0, 1 - noClicks * 0.05);

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    const x = Math.random() * (screenWidth - 100);
    const y = Math.random() * (screenHeight - 100);

    noButton.style.position = "fixed";
    noButton.style. left = x + "px";
    noButton.style.top = y + "px";

    if(noClicks > 2) {
        noButton.innerText = "...really?";
    }

    if(noClicks > 5) {
        noButton.innerText = "be serious";
        yesButton.innerText = "YES ✅";
    }

    if(noClicks > 8) {
        noButton.innerText = "just press yes";
    }

    if(noClicks > 15) {
        noButton.style.display = "none";
        
        yesButton.style = ""

        yesButton.style.position = "fixed";
        yesButton.style.top = "0";
        yesButton.style.left = "0";
        yesButton.style.width = "100vw";
        yesButton.style.height = "100vh";

        yesButton.style.margin = "0";
        yesButton.style.padding = "0";

        yesButton.style.maxWidth = "none";

        yesButton.style.zIndex = "9999";
        yesButton.style.borderRadius = "0";

        yesButton.style.display = "flex";
        yesButton.style.justifyContent = "center";
        yesButton.style.alignItems = "center";

        yesButton.style.fontSize = "48px";
    }


}

function sayYes() {
    showSection("result");
}