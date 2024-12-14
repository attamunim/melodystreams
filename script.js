document.addEventListener("DOMContentLoaded", () => {
    // Validate Contact Form
    const form = document.querySelector("#contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const message = document.querySelector("#message").value;

            if (!name || !email || !message) {
                alert("All fields are required!");
                e.preventDefault();
            } else if (!email.includes("@")) {
                alert("Please enter a valid email!");
                e.preventDefault();
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
document.querySelector("#form").addEventListener("submit", (e) => {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();
    let errorMessage = "";

    if (!name) errorMessage += "Name is required.\n";
    if (!email || !email.includes("@")) errorMessage += "Valid email is required.\n";
    if (!message) errorMessage += "Message is required.\n";

    if (errorMessage) {
        alert(errorMessage);
        e.preventDefault();
    } else {
        alert("Message sent successfully!");
    }
});
document.querySelector("#genre-filter").addEventListener("change", (e) => {
    const selectedGenre = e.target.value;
    const cards = document.querySelectorAll(".card-container .card");

    cards.forEach((card) => {
        const genre = card.getAttribute("data-genre");
        card.style.display = selectedGenre === "all" || genre === selectedGenre ? "block" : "none";
    });
});
const toggleDarkMode = document.getElementById("dark-mode-toggle");
toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleDarkMode.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

setInterval(() => {
    testimonials.forEach((testimonial, index) => {
        testimonial.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
    currentIndex = (currentIndex + 1) % testimonials.length;
}, 3000);
document.addEventListener("DOMContentLoaded", () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const notes = {
        "C": 261.63,
        "C#": 277.18,
        "D": 293.66,
        "D#": 311.13,
        "E": 329.63,
        "F": 349.23,
        "F#": 369.99,
        "G": 392.00,
        "G#": 415.30,
        "A": 440.00,
        "A#": 466.16,
        "B": 493.88
    };

    const keys = document.querySelectorAll(".key");

    // Add event listeners for mouse clicks
    keys.forEach(key => {
        key.addEventListener("mousedown", () => {
            const note = key.getAttribute("data-note");
            playSound(notes[note]);
            key.classList.add("active"); // Add visual feedback
        });

        key.addEventListener("mouseup", () => {
            key.classList.remove("active"); // Remove visual feedback
        });

        key.addEventListener("mouseleave", () => {
            key.classList.remove("active"); // Remove visual feedback when the mouse leaves the key
        });
    });

    function playSound(frequency) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = "sine"; // Can be "sine", "square", "triangle", or "sawtooth"
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 1);
        oscillator.stop(audioContext.currentTime + 1);
    }
});
