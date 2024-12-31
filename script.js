// Countdown Timer with Flip Animation
const countdownElement = document.getElementById("countdown");
const newYear = new Date("January 1, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYear - now;

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `
        <span>${days}</span>d 
        <span>${hours}</span>h 
        <span>${minutes}</span>m 
        <span>${seconds}</span>s`;
}

setInterval(updateCountdown, 1000);

// Fireworks Animation
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
let shape = "circle";

function createFirework(x, y, shape) {
    for (let i = 0; i < 100; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 4 + 2;
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particles.push({ x, y, dx, dy, color, size: Math.random() * 3 + 1, life: 1 });
    }
}

function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        particle.x += particle.dx;
        particle.y += particle.dy;
        particle.life -= 0.02;
        if (particle.life <= 0) particles.splice(index, 1);
    });
    requestAnimationFrame(drawParticles);
}

canvas.addEventListener("click", (e) => {
    createFirework(e.clientX, e.clientY, shape);
});
drawParticles();

// Firework Shape Selector
document.getElementById("fireworkShape").addEventListener("change", (e) => {
    shape = e.target.value;
});

// Greet User
document.getElementById("greetButton").addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput").value.trim();
    if (nameInput) {
        alert(`Happy New Year, ${nameInput}! 🎉`);
    } else {
        alert("Please enter your name to receive a greeting!");
    }
});

// Resolution Input
const resolutionInput = document.getElementById("resolutionInput");
const resolutionMarquee = document.getElementById("resolutionMarquee");

document.getElementById("addResolution").addEventListener("click", () => {
    const resolution = resolutionInput.value.trim();
    if (resolution) {
        resolutionMarquee.innerHTML += `🎉 ${resolution} 🎉 `;
        resolutionInput.value = "";
    }
});

// Inspirational Message
const messages = [
    "New Year, New Beginnings! 🎉",
    "Dream big and achieve more in 2025! 🚀",
    "Every day is a chance to grow. 🌟"
];

document.getElementById("generateMessage").addEventListener("click", () => {
    alert(messages[Math.floor(Math.random() * messages.length)]);
});

// Theme Toggling
let currentTheme = "dark";

document.getElementById("themeToggle").addEventListener("click", () => {
    if (currentTheme === "dark") {
        document.body.style.background = "linear-gradient(to bottom, #ff7e5f, #feb47b)";
        document.body.style.color = "black";
        currentTheme = "light";
    } else {
        document.body.style.background = "linear-gradient(to bottom, #000428, #004e92)";
        document.body.style.color = "white";
        currentTheme = "dark";
    }
});
