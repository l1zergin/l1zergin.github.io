/*
========================================
LIZERGIN PORTFOLIO
script.js
========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    //-----------------------------------
    // Cursor Glow
    //-----------------------------------

    const glow = document.getElementById("cursor-glow");

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

    //-----------------------------------
    // Aurora Mouse Effect
    //-----------------------------------

    const auroras =
    document.querySelectorAll(".aurora");

    document.addEventListener("mousemove", e=>{

        const x=(e.clientX/window.innerWidth-.5)*40;

        const y=(e.clientY/window.innerHeight-.5)*40;

        auroras.forEach((a,index)=>{

            const speed=(index+1)*0.4;

            a.style.transform=
            `translate(${x*speed}px,${y*speed}px)`;

        });

    });

    //-----------------------------------
    // Scroll Reveal
    //-----------------------------------

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach((section) => {

        section.classList.add("hidden");

        observer.observe(section);

    });

    //-----------------------------------
    // Typing Effect
    //-----------------------------------

    const text = document.getElementById("typing");

    const words = [

        "Python Developer",
        "Unity Developer",
        "Desktop Developer",
        "Telegram Bot Developer",
        "Web Developer"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {

        const current = words[wordIndex];

        if (!deleting) {

            text.textContent =
                current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(type, 1300);

                return;

            }

        } else {

            text.textContent =
                current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                wordIndex++;

                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }

            }

        }

        setTimeout(type, deleting ? 40 : 80);

    }

    type();

    //-----------------------------------
    // Header Shadow
    //-----------------------------------

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.style.background =
                "rgba(9,9,11,.80)";

            header.style.boxShadow =
                "0 10px 35px rgba(0,0,0,.35)";

        }

        else {

            header.style.background =
                "rgba(9,9,11,.55)";

            header.style.boxShadow =
                "none";

        }

    });

});

    //-----------------------------------
    // Active Navigation
    //-----------------------------------

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    function updateNavigation() {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;
            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateNavigation);

    updateNavigation();

    //-----------------------------------
    // Hero Card Tilt
    //-----------------------------------

    const heroCard = document.querySelector(".hero-card");

    if (heroCard) {

        heroCard.addEventListener("mousemove", (e) => {

            const rect = heroCard.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 20;
            const rotateY = (x - rect.width / 2) / 20;

            heroCard.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-8px)
            `;

        });

        heroCard.addEventListener("mouseleave", () => {

            heroCard.style.transform = `
                perspective(900px)
                rotateX(0deg)
                rotateY(0deg)
                translateY(0px)
            `;

        });

    }

    //-----------------------------------
    // Skill Cards Tilt
    //-----------------------------------

    document.querySelectorAll(".skill-card").forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 18;
            const rotateY = (x - rect.width / 2) / 18;

            card.style.transform = `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
            `;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    //-----------------------------------
    // Smooth Anchor Scroll
    //-----------------------------------

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    //-----------------------------------
// Copy Wallet
//-----------------------------------

const copyButton =
document.getElementById("copyWallet");

if(copyButton){

    copyButton.addEventListener("click",()=>{

        const address=
        document.getElementById("wallet-address").textContent.trim();

        navigator.clipboard.writeText(address);

        copyButton.textContent="Copied ✓";

        setTimeout(()=>{

            copyButton.textContent="Copy Address";

        },2000);

    });

}

//-----------------------------------
// Mobile Menu
//-----------------------------------

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.querySelector(".navbar nav");

if(menuToggle && mobileNav){

    menuToggle.addEventListener("click",()=>{

        mobileNav.classList.toggle("active");

    });

    mobileNav.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            mobileNav.classList.remove("active");

        });

    });

}

//-----------------------------------
// Scroll Progress
//-----------------------------------

const progressBar =
document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

    const height =
    document.documentElement.scrollHeight -
    window.innerHeight;

    const progress =
    window.scrollY / height * 100;

    progressBar.style.width =
    progress + "%";

});