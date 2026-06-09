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
        "You’re so beautiful",
        "Your eyes are my favourite thing about you overall, I love them",
        "Your hair, despite it getting everywhere, it’s pretty",
        "Your nails, I have a thing for nails and you constantly have nice ones, plus they give the best scratches.",
        "BOOBS, I think Amber said it best, they’re just right.",
        "Your smile, specifically when laughing, it’s infectious.",
        "You pay attention to my hobbies when you have no interest in them whatsoever.",
        "I love it when you run your fingers through my hair, it melts me every time.",
        "You’re so good with children it’s honestly just impressive at this point, they gravitate towards you and it’s such a relief to know that when I introduce you to Nelly I have nothing to worry about.",
        "You put everyone before yourself, you’re very caring and nurturing and you look after your family with everything you have.",
        "You make me laugh, you’re not as funny as me, but you can’t have it all.",
        "I love your addiction to my butt, makes me feel desired.",
        "I can be my full and true self around you.",
        "I’m very self conscious about things like my overthinking and spiralling because of what others have said to me in the past, but you don’t make me feel like a burden. You acknowledge it, but you also don’t over panda to it. It’s the perfect combination of sympathy and a kick up the arse that I desperately need sometimes.",
        "You’re cooking is out of this world, and you graciously let me have steaks so that I don’t feel useless in the kitchen.",
        "I love how much you love reg, it’s cute.",
        "I get to call you a cunt and take the piss out of you and you give it back instead of going in a strop.",
        "I love your family. They’ve made me feel so welcome and I just appreciate them.",
        "I really appreciate you pushing yourself out of your comfort zone to tell me things that make me feel good, like how you’ve never been cuddly before and how this feels different. I know you don’t usually outwardly show affection like that but you make an effort for me cause I’m a melt and need reassurance all the time. I feel heard because you take on what I’ve said and it makes me feel special, thank you.",
        "You give very very good blowjobs.",
        "You’re also talented with your hands.",
        "I love your butt.",
        "I really really like having sex with you, you barely have to do anything to get me going because I’m just that into you.",
        "You were great with my family and particularly Lucy. That means a lot to me, not everyone can be like that around her and I appreciate it.",
        "Just lying there watching TikToks separately is fun with you.",
        "You know what I like already and can tell me if I’m going to enjoy a book or not. This is a superpower.",
        "I love you a lot more than you think I do. You’re incredibly important to me, you make me very happy, very horny, and I just feel like I’m in such a good spot in life now that I’ve met you. And I’ll make sure that I do everything in my power to make you feel loved and cared for.",
        "You make me feel special and you put up with my nonsense which is huge to me."
    ];
    const random = messages[Math.floor(Math.random() * messages.length)];
    typeText("love", random);
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

// Navigation
function showSection(section) {
    const sections = ["menuSection", "daysSection", "loveSection", "photoSection", "formSection", "questionSection", "resultSection"];
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
    

    if (section === "days") {
        document.getElementById("daysSection").style.display = "block";
    }
    if (section === "love") {
        document.getElementById("loveSection").style.display = "block";
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