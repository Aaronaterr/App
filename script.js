// Days together
const startDate = new Date("2025-06-14");
const today = new Date();
const diffTime = today - startDate;
const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("days").innerText = 
    "We've been together for " + days + " days!";

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
    document.getElementById("love").innerText = random;
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
    document.getElementById("memory").innerText = random;
}

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
    document.getElementById("letterText").innerText = message;
}

function showSection(section) {
    const sections = ["home", "loveSection", "memorySection", "photoSection", "lettersSection"];

        sections.forEach(id => {
            const el = document.getElementById(id);
            el.style.display = "none";
            el.classList.remove("active");
        });

        let targetId = "";
        if (section === "home") targetId = "home";
        if (section === "love") targetId = "loveSection";
        if (section === "memory") targetId = "memorySection";
        if (section === "photo") targetId = "photoSection";
        if (section === "letters") targetId = "lettersSection";

        const target = document.getElementById(targetId);
        target.style.display = "block";

        setTimeout(() => {
            target.classList.add("active");
        }, 10);
    

    if (section === "home") {
        document.getElementById("home").style.display = "block";
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
}