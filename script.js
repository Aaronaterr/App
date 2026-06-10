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
    document.getElementById("hoursNumber").innerText = hours;
    document.getElementById("minutesNumber").innerText = minutes;
    document.getElementById("secondsNumber").innerText = seconds;
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
function typeText(id, text, speed = 30) {
    const el = document.getElementById(id);
    el.innerHTML = "";

    let i = 0
    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
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

    const container = document.querySelector(".scan-container");

    container.classList.remove("scan-container");
    void container.offsetWidth;
    container.classList.add("scan-container");

    const threat = threatLevels[Math.floor(Math.random() * threatLevels.length)];
    const incident = incidents[Math.floor(Math.random() * incidents.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];

    const riskLevelEl = document.getElementById("riskLevel");

    riskLevelEl.classList.remove("glow-low", "glow-medium", "glow-high", "glow-critical");

    riskLevelEl.style.color = getRiskColour(threat);

        if (threat.includes("LOW")) riskLevelEl.classList.add("glow-low");
        if (threat.includes("MEDIUM")) riskLevelEl.classList.add("glow-medium");
        if (threat.includes("HIGH")) riskLevelEl.classList.add("glow-high");
        if (threat.includes("CRITICAL")) riskLevelEl.classList.add("glow-critical");

    riskLevelEl.style.color = getRiskColour(threat);

    document.getElementById("riskLevel").innerHTML = "";
    document.getElementById("riskIssue").innerHTML = "";
    document.getElementById("riskAction").innerHTML = "";

    typeThreat("riskLevel", threat);

    setTimeout(() => {
        typeText("riskIssue", incident); 
    }, 900);

    setTimeout(() => {
        typeText("riskAction", action);
    }, 1800);
}

function getRiskColour(threat) {

    if (threat.includes("LOW")) return "green";
    if (threat.includes("MEDIUM")) return "gold";
    if (threat.includes("HIGH")) return "orange";
    if (threat.includes("CRITICAL")) return "red";
    return "black";

}
 
function typeThreat(id, threat) {
    const el = document.getElementById(id);
    const match = threat.match(/^([A-Z]+)(.*)$/);

    if (!match) {
        typeText(id, threat);
        return;
    }

    const main = match[1];
    const rest = match[2];

    el.innerHTML = "";

    const strong = document.createElement("strong");
    const span = document.createElement("span");

    span.style.display = "inline";

    el.appendChild(strong);
    el.appendChild(span);

    typeTextIntoElement(strong, main);
    setTimeout(() => {
        typeTextIntoElement(span, rest);
    }, main.length * 30);
}

function typeTextIntoElement(el, text, speed = 30) {
    el.innerText = "";

    let i = 0;
    function type() {
        if (i < text.length) {
            el.innerText += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}