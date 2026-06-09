// Image Preload
const photos = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg",
    "images/11.jpg",
    "images/12.jpg",
    "images/13.jpg",
    "images/14.jpg",
    "images/15.jpg",
    "images/16.jpg",
    "images/17.jpg",
    "images/18.jpeg",
    "images/19.jpg",
    "images/20.jpg",
    "images/21.jpg",
    "images/22.jpg",
    "images/23.jpg"
];

const preloadedImages = [];

photos.forEach(src => {
    const img = new Image();
    img.src = src;
    preloadedImages.push(img);
});

// Timer
const startDate = new Date("2025-06-14T19:00:00"); 

function updateTimeTogether() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 *24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("daysNumber").innerText = days;

    const output =
    
        hours + " hours\n\n" +
        minutes + " minutes\n\n" +
        seconds + " seconds\n\n" +
        "and you still haven't dumped me. Yet.";

    document.getElementById("daysText").innerText = output;
}

updateTimeTogether();
setInterval(updateTimeTogether, 1000);

// Photos
let photoQueue = [];
shufflePhotos();

function shufflePhotos() {
    photoQueue = [...photos];

    for (let i = photoQueue.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [photoQueue[i], photoQueue[j]] = [photoQueue[j], photoQueue[i]];
    }
}

function showPhoto() {
    const imgEl = document.getElementById("photo");

    if (photoQueue.length === 0) {
        shufflePhotos();
    }

    const nextPhoto = photoQueue.pop();

    imgEl.style.opacity = "0"

    setTimeout(() => {
        imgEl.src = nextPhoto;
        imgEl.style.display = "block";
        imgEl.style.opacity = "1";
    }, 100);
}

// Navigation
function showSection(section) {
    const sections = ["menuSection", "daysSection", "riskSection", "photoSection", "formSection", "questionSection", "resultSection"];
    const music = document.getElementById("musicContainer");

        sections.forEach(id => {
            const el = document.getElementById(id);
            el.style.display = "none";
            el.classList.remove("active");
        });

        let targetId = "";
        if (section === "menu") targetId = "menuSection";
        if (section === "days") targetId = "daysSection";
        if (section === "risk") targetId = "riskSection";
        if (section === "photo") targetId = "photoSection";
        if (section === "form") targetId = "formSection";
        if (section === "question") targetId = "questionSection";
        if (section === "result") targetId = "resultSection";

        if (section === "menu") {
            music.style.display = "block";
        } else {
            music.style.display = "none";
        }

        if (section === "question") {
            yesSize = 16;
            noClicks = 0;

            const yesButton = document.getElementById("yesButton");
            const noButton = document.getElementById("noButton");

            yesButton.style = "";
            yesButton.innerText = "Yes";

            noButton.style = "";
            noButton.innerText = "No";
        }

        const target = document.getElementById(targetId);
        target.style.display = "block";

        setTimeout(() => {
            target.classList.add("active");
        }, 10);
    

        if (section === "risk") {
                generateRisk();
        }


    if (section === "days") {
        document.getElementById("daysSection").style.display = "block";
    }
    if (section === "risk") {
        document.getElementById("riskSection").style.display = "block";
    }
    if (section === "photo") {
        document.getElementById("photoSection").style.display = "block";
    }
    if (section === "form") {
        document.getElementById("formSection").style.display = "block";
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

//Risk

const threatLevels = [
    "LOW (suspiciously calm)",
    "MEDIUM (not ideal)",
    "HIGH (start apologising)",
    "CRITICAL (seriously reconsider choices)"
];

const incidents = [
    "Caught not listening again",
    "Mentioned paying for the laptop and phone... AGAIN",
    "Said 'Pants'",
    "Referred to sex in ridiculous manner (i.e. Romping)",
    "Farted too many times in small space of time",
    "Gave Nelly pizza",
    "Had a chinese without Molly",
    "Told another terrible Dad joke",
];

const actions = [
    "Apologise immediately",
    "Give emergancy massage",
    "Offer back tickles",
    "Stop talking... quickly.",
    "Take her to Oriental Palace (only applicable if on a Sunday)",
    "Get the emergancy Dairylea Dunkers",
];

function generateRisk() {
    const riskEl = document.getElementById("riskOutput");

    const threat = threatLevels[Math.floor(Math.random() * threatLevels.length)];
    const incident = incidents[Math.floor(Math.random() * incidents.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];

    riskEl.innerText = 
        "Threat Level: " + threat + "\n\n" +
        "Current Issue: " + incident + "\n\n" +
        "Recommended Action: " + action;
}

