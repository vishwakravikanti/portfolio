/* ==========================
   TYPING EFFECT
========================== */

const roles = [
    "Python Developer",
    "Data Science Enthusiast",
    "Data Analytics Intern",
    "Computer Vision Learner",
    "Web Development Enthusiast",
    "Aspiring Software Engineer",
    "Problem Solver",
    "Tech Explorer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();

/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const revealElements = document.querySelectorAll(
    ".glass-card, .skill-card, .timeline-item, .project-card, .stat"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================
   ADD REVEAL CLASS
========================== */

revealElements.forEach(element => {

    element.classList.add("reveal");
});

/* ==========================
   ACHIEVEMENT COUNTERS
========================== */

const counters =
document.querySelectorAll(".stat h1");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".stats");

    if (!statsSection) return;

    const sectionTop =
        statsSection.getBoundingClientRect().top;

    if (sectionTop <
        window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const text =
                counter.innerText;

            const target =
                parseFloat(text);

            let count = 0;

            const increment =
                target / 60;

            const updateCounter = () => {

                if (count < target) {

                    count += increment;

                    if (text.includes("%")) {

                        counter.innerText =
                            count.toFixed(1) + "%";

                    } else if (text.includes("+")) {

                        counter.innerText =
                            Math.floor(count) + "+";

                    } else {

                        counter.innerText =
                            Math.floor(count);
                    }

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = text;
                }
            };

            updateCounter();
        });
    }
}

window.addEventListener("scroll",
    startCounters);

startCounters();

/* ==========================
   ACTIVE NAVIGATION LINK
========================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >=
            sectionTop - 200
        ) {
            current =
                section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {
            link.classList.add("active");
        }
    });
});

/* ==========================
   FLOATING PARTICLES
========================== */

function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    document.body.appendChild(
        particle
    );

    const size =
        Math.random() * 8 + 2;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particle.style.left =
        Math.random() *
        window.innerWidth + "px";

    particle.style.top =
        window.innerHeight + "px";

    particle.style.position =
        "fixed";

    particle.style.borderRadius =
        "50%";

    particle.style.background =
        "rgba(0,245,255,0.6)";

    particle.style.pointerEvents =
        "none";

    particle.style.zIndex =
        "-1";

    const duration =
        Math.random() * 5000 + 4000;

    particle.animate(

        [
            {
                transform:
                    "translateY(0px)",
                opacity: 1
            },

            {
                transform:
                    `translateY(-${window.innerHeight + 200}px)`,
                opacity: 0
            }

        ],

        {
            duration: duration
        }

    );

    setTimeout(() => {

        particle.remove();

    }, duration);
}

setInterval(createParticle, 300);

/* ==========================
   SMOOTH CARD TILT
========================== */

const cards =
document.querySelectorAll(
    ".project-card, .glass-card"
);

cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 20;

            const rotateY =
                (centerX - x) / 20;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(1000px) rotateX(0) rotateY(0)";
        }
    );
});

/* ==========================
   PAGE LOADER EFFECT
========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity = "1";

    }, 100);
});

/* ==========================
   CONSOLE SIGNATURE
========================== */

console.log(
`
=================================
     R VISHWAK PORTFOLIO
=================================
Python Developer
Data Science Enthusiast
Future Software Engineer
=================================
`
);