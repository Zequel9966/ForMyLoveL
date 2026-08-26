// Temporizador para el 3 de septiembre de 2026 a las 21:00
const targetDate = new Date("September 3, 2026 21:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
  } else {
    document.querySelector(".timer-container").innerHTML = "<h3>¡Llegó la fecha!</h3>";
  }
}

// Actualizar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();

// ===== Carta con lluvia de corazones y pergamino =====
const envelopeBtn = document.getElementById("envelopeBtn");
const heartsOverlay = document.getElementById("heartsOverlay");
const scrollBackdrop = document.getElementById("scrollBackdrop");
const scrollModal = document.getElementById("scrollModal");
const scrollClose = document.getElementById("scrollClose");

function launchHearts() {
  const heartEmojis = ["❤️", "💖", "💕", "💗", "💘"];
  const total = 35;

  for (let i = 0; i < total; i++) {
    const heart = document.createElement("span");
    heart.classList.add("floating-heart");
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.setProperty("--drift", (Math.random() * 200 - 100) + "px");
    heart.style.animationDelay = (Math.random() * 1) + "s";
    heart.style.fontSize = (1.2 + Math.random() * 1.5) + "rem";
    heartsOverlay.appendChild(heart);
  }

  // Se limpian los corazones después de 3 segundos
  setTimeout(() => {
    heartsOverlay.innerHTML = "";
  }, 3000);
}

envelopeBtn.addEventListener("click", () => {
  launchHearts();

  // Se abre el pergamino
  scrollBackdrop.classList.add("active");
  setTimeout(() => {
    scrollModal.classList.add("open");
  }, 50);
});

function closeScroll() {
  scrollModal.classList.remove("open");
  setTimeout(() => {
    scrollBackdrop.classList.remove("active");
  }, 500);
}

scrollClose.addEventListener("click", closeScroll);

// Cerrar si se hace clic fuera del pergamino
scrollBackdrop.addEventListener("click", (e) => {
  if (e.target === scrollBackdrop) {
    closeScroll();
  }
});