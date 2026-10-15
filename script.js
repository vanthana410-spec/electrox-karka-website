document.addEventListener("DOMContentLoaded", () => {
  // Click spark effect
  document.addEventListener("click", (event) => {
    const spark = document.createElement("span");
    spark.className = "click-spark";
    spark.textContent = "✦";

    spark.style.left = event.clientX + "px";
    spark.style.top = event.clientY + "px";
    spark.style.setProperty("--spark-x", (Math.random() - 0.5) * 80 + "px");
    spark.style.setProperty("--spark-y", (Math.random() - 0.5) * 80 + "px");

    document.body.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove());
  });
    // Mobile navigation
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );

            menuButton.textContent = isOpen ? "✕" : "☰";
        });

        // Close mobile menu after selecting a section
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation");
                menuButton.textContent = "☰";
            });
        });
    }

    // Small sparkle effect on clicks
    document.addEventListener("click", (event) => {

        const target = event.target.closest(
            "a, button, .course-card, .journey-card"
        );

        if (!target) return;

        // Respect reduced-motion settings
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const symbols = ["✦", "✧", "·"];
        const rect = target.getBoundingClientRect();

        for (let i = 0; i < 3; i++) {
            const spark = document.createElement("span");

            spark.className = "click-spark";
            spark.textContent = symbols[i];

            spark.style.left = `${event.clientX || rect.left + rect.width / 2}px`;
            spark.style.top = `${event.clientY || rect.top + rect.height / 2}px`;

            spark.style.setProperty(
                "--spark-x",
                `${Math.round(Math.random() * 50 - 25)}px`
            );

            spark.style.setProperty(
                "--spark-y",
                `${Math.round(Math.random() * -45 - 10)}px`
            );

            document.body.appendChild(spark);

            spark.addEventListener("animationend", () => {
                spark.remove();
            });
        }
    });

    // Current year in the footer, if present
    const copyright = document.querySelector(".copyright");

    if (copyright) {
        copyright.textContent =
            `© ${new Date().getFullYear()} Karka Website Redesign Concept`;
    }

    console.log("Karka website is ready!");
});
// ===== FUTURISTIC GALAXY STARS =====

const galaxy = document.createElement("div");
galaxy.className = "galaxy-stars";

Object.assign(galaxy.style, {
    position: "fixed",
    inset: "0",
    pointerEvents: "none",
    overflow: "hidden",
    zIndex: "0"
});

document.body.prepend(galaxy);

// Create glowing stars
for (let i = 0; i < 80; i++) {
    const star = document.createElement("span");

    const size = Math.random() * 3 + 1;

    Object.assign(star.style, {
        position: "absolute",
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        width: size + "px",
        height: size + "px",
        borderRadius: "50%",
        background: Math.random() > 0.5 ? "#00e5ff" : "#b76aff",
        boxShadow: "0 0 8px currentColor",
        animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite alternate`,
        animationDelay: Math.random() * 3 + "s"
    });

    galaxy.appendChild(star);
}

// Shooting star animation
const shootingStar = document.createElement("div");
shootingStar.className = "shooting-star";
galaxy.appendChild(shootingStar);

// Keep website content above the background
document.querySelectorAll("body > *:not(.galaxy-stars)").forEach(element => {
    if (getComputedStyle(element).position === "static") {
        element.style.position = "relative";
    }
    element.style.zIndex = "1";
});

console.log("Galaxy animation loaded!");
// Smooth section reveal animation

const revealItems = document.querySelectorAll(
"section h2, .course-card, .project-card"
);

revealItems.forEach((item) => {
item.classList.add("reveal");
});

const revealObserver = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
revealObserver.unobserve(entry.target);
}
});
}, {
threshold: 0.15
});

revealItems.forEach((item) => {
revealObserver.observe(item);
});

.hero {
    position: relative;
    overflow: hidden;
    isolation: isolate;
}

/* Animated AI glow */

.hero::before {
    content: "";
    position: absolute;
    width: 280px;
    height: 280px;
    top: 10%;
    right: 5%;

    background: radial-gradient(
        circle,
        rgba(0, 225, 255, 0.22),
        rgba(150, 60, 255, 0.12),
        transparent 70%
    );

    filter: blur(15px);
    border-radius: 50%;
    z-index: -1;

    animation: aiGlow 5s ease-in-out infinite alternate;
}

@keyframes aiGlow {
    0% {
        transform: scale(0.8);
        opacity: 0.5;
    }

    100% {
        transform: scale(1.3);
        opacity: 1;
    }
}

/* Animated gradient heading */

.hero h1 {
    background: linear-gradient(
        90deg,
        #ffffff,
        #00e5ff,
        #b76aff,
        #ffffff
    );

    background-size: 250% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: gradientMove 5s linear infinite;
}

@keyframes gradientMove {
    to {
        background-position: 250% center;
    }
}
console.log("Galaxy stars:", document.querySelectorAll(".galaxy-stars span").length);
