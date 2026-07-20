// ===============================
// Portfolio JavaScript
// ===============================

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===============================
// Typing Effect
// ===============================

const roles = [
    "Aspiring Java Full Stack Developer",
    "Spring Boot Developer",
    "AI & Data Science Enthusiast",
    "Cloud Computing Learner"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const roleElement = document.querySelector(".home-content h2");

function typeEffect() {

    if (!roleElement) return;

    const current = roles[roleIndex];

    if (!isDeleting) {
        roleElement.textContent = current.substring(0, charIndex++);
    } else {
        roleElement.textContent = current.substring(0, charIndex--);
    }

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length + 1) {
        speed = 1800;
        isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ===============================
// Header Background on Scroll
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#020617";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.4)";
    } else {
        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "none";
    }

});

// ===============================
// Reveal Animation
// ===============================

const sections = document.querySelectorAll("section");

const reveal = () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

};

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};

// ===============================
// Footer Year
// ===============================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Parameshwaran S | All Rights Reserved`;

}