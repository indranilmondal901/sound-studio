// Header background on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll animation
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

faders.forEach(el => observer.observe(el));

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


function sendMail(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailTo = "youremail@example.com"; // 🔥 change this

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailLink = `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailLink;
}

AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});


const expBox = document.querySelector(".experience-box");
let started = false;

const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            started = true;

            let count = 0;
            let target = 20;

            let interval = setInterval(() => {
                if (count >= target) {
                    clearInterval(interval);
                } else {
                    count++;
                    document.getElementById("expCount").innerText = `${count} +`;
                }
            }, 200);
        }
    });
}, { threshold: 0.5 });

obs.observe(expBox);