// PERSONALIZA AQUÍ la fecha de inicio de su relación (formato AAAA-MM-DD).
// Fecha real de inicio de la relación: 18 de septiembre de 2026.
const relationshipStart = new Date("2026-09-18T00:00:00");

// Puedes reemplazar los archivos de audio sin cambiar el código:
// canción principal: assets/cancion.mp3
// música del minijuego: assets/musica-minijuego.mp3

const quizQuestions = [
  {
    question: "¿Cómo describirías nuestro amor, mi princesa?",
    answers: [
      { text: "Como un lugar seguro donde siempre podemos ser nosotros mismos.", message: "Quiero que conmigo siempre tengas un lugarcito seguro, mi amor, donde puedas ser tú misma y sentirte querida tal como eres. ♡" },
      { text: "Como una aventura bonita en la que todavía nos queda muchísimo por descubrir.", message: "Y yo quiero descubrir cada pedacito de esta aventura contigo, mi amor. Esto recién comienza y ya es una de las cosas más bonitas de mi vida. ♡" },
      { text: "Como un pequeño sueño que cada día se vuelve más hermoso y real.", message: "A veces todavía me parece un sueño tenerte en mi vida, mi princesa bella. Qué bonito es poder vivirlo contigo, poquito a poquito. 💛" }
    ]
  },
  {
    question: "¿Qué crees que hace tan especiales nuestros momentos juntos?",
    answers: [
      { text: "Que hasta una conversación sencilla puede convertirse en mi momento favorito.", message: "Es que contigo hasta las cositas más sencillas se vuelven recuerdos que quiero guardar para siempre, mi corazón. ♡" },
      { text: "Que podemos reírnos, bromear y hacer que cualquier día sea más bonito.", message: "Quiero seguir llenando tus días de risitas, ocurrencias y mucho cariño, porque verte feliz también hace feliz a mi corazón. 🌼" },
      { text: "Que incluso desde lejos podemos hacernos sentir cerca el uno del otro.", message: "Aunque a veces nos separen los kilómetros, siempre voy a buscar la forma de hacerte sentir cerquita de mí, mi amor. 💗" }
    ]
  },
  {
    question: "¿Qué te gustaría que nunca faltara en nuestra relación?",
    answers: [
      { text: "La ternura de cuidarnos y recordarnos cuánto nos queremos.", message: "Quiero recordarte de mil maneras lo importante que eres para mí y cuidarte con todo el amor bonito que tengo para darte. ♡" },
      { text: "La confianza para contarnos nuestros sueños, miedos y secretos.", message: "Deseo que siempre podamos hablarnos con el corazón, compartir nuestros sueños y acompañarnos incluso en los días difíciles, mi vida. 🤎" },
      { text: "Las risas, las pequeñas locuras y las ganas de seguir conquistándonos.", message: "Prometo seguir buscando nuevas formas de sacarte una sonrisa y enamorarte un poquito más, porque todavía tengo muchísimo amor para darte. :3 ♡" }
    ]
  },
  {
    question: "Si pudiéramos guardar un deseo para nuestro futuro, ¿cuál elegirías?",
    answers: [
      { text: "Que podamos cumplir juntos todos esos planes que nos hacen ilusión.", message: "Yo también sueño con cumplir cada uno de esos planes contigo, mi amor, y guardar en el corazón cada pasito que demos para hacerlos realidad. 💛" },
      { text: "Que sigamos eligiéndonos y aprendiendo a querernos cada día mejor.", message: "Eso deseo con todo mi corazón: seguir eligiéndote, aprender de nosotros y amarte cada día de una manera más bonita. ♡" },
      { text: "Que algún día miremos atrás y sonriamos por todo lo que construimos.", message: "Me emociona imaginar todo lo que nos falta vivir y que algún día podamos mirar atrás, abrazarnos y decir: qué bonita historia construimos juntos. 🌼" }
    ]
  },
  {
    question: "¿Qué te gustaría decirle a nuestra historia en este primer mes?",
    answers: [
      { text: "Gracias por este comienzo tan bonito; quiero descubrir todo lo que nos espera.", message: "Gracias a ti, mi princesa, por formar parte de este comienzo tan bello. Quiero descubrir contigo todo lo bonito que la vida todavía nos guarda. ♡" },
      { text: "Este primer mes ya es un recuerdo precioso que siempre voy a guardar.", message: "Yo también voy a guardar este primer mes en el lugar más especial de mi corazón. Es nuestro primer capítulo y significa muchísimo para mí, amorcito. 💗" },
      { text: "Ojalá este sea solo el primero de muchísimos meses y aventuras a tu lado.", message: "Ese es uno de mis deseos más grandes, mi amor: que este sea apenas el primero de muchísimos meses, recuerdos y aventuras a tu lado. Te amo muchísimo. ♡" }
    ]
  }
];

const dedications = [
  { title: "Mi dibujo favorito", text: "Este dibujito tiene un lugar especial, porque me recuerda lo bonito que es tenerte en mi vida. ♡", icon: "♡" },
  { title: "Mi regalito para ti", text: "No es un regalo enorme, pero lo hice con muchísimo cariño, pensando en ti, mi amor. 💗", icon: "✿" },
  { title: "Un dibujito más", text: "Un dibujito más para recordarte que siempre voy a encontrar nuevas formas de demostrarte cuánto te amo. 🌷", icon: "♡" }
];

const $ = (selector) => document.querySelector(selector);
const pad = (value) => String(value).padStart(2, "0");

function updateCounter() {
  const now = new Date();
  if (Number.isNaN(relationshipStart.getTime()) || relationshipStart > now) {
    $("#counter-foot").textContent = "Configura la fecha de inicio en script.js para activar el contador. ♡";
    return;
  }
  let seconds = Math.floor((now - relationshipStart) / 1000);
  const days = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;
  $("#days").textContent = days;
  $("#hours").textContent = pad(hours);
  $("#minutes").textContent = pad(minutes);
  $("#seconds").textContent = pad(seconds);
}
updateCounter();
setInterval(updateCounter, 1000);

function bindAudio(audioSelector, buttonSelector, statusSelector, playText, pauseText, missingText, playingText) {
  const audio = $(audioSelector);
  const button = $(buttonSelector);
  const status = $(statusSelector);
  button.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        button.textContent = pauseText;
        status.textContent = playingText;
      } catch {
        status.textContent = missingText;
      }
    } else {
      audio.pause();
      button.textContent = playText;
      status.textContent = "Pausadita por ahora. ♡";
    }
  });
  audio.addEventListener("ended", () => { button.textContent = playText; });
  return audio;
}

const loveSong = bindAudio("#love-song", "#music-toggle", "#audio-status", "▶ Reproducir nuestra canción", "❚❚ Pausar nuestra canción", "No se pudo reproducir el audio.", "Reproduciendo nuestra bella canción. ♡");
const quizSong = bindAudio("#quiz-song", "#quiz-music-toggle", "#quiz-audio-status", "▶ Reproducir", "❚❚ Pausar", "No se pudo reproducir la música.", "La musiquita está sonando. ¡A jugar, mi amor! ♡");

let currentQuestion = 0;
let answered = false;
let selectedAnswers = [];
const answersEl = $("#answers");
const nextButton = $("#next-question");

function renderQuestion() {
  answered = false;
  const q = quizQuestions[currentQuestion];
  $("#question-number").textContent = `PREGUNTA ${currentQuestion + 1} DE ${quizQuestions.length}`;
  $("#progress-fill").style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
  $("#question").textContent = q.question;
  $("#quiz-feedback").textContent = "";
  nextButton.disabled = true;
  nextButton.textContent = currentQuestion === quizQuestions.length - 1 ? "Abrir mi cartita ♡" : "Siguiente ♡";
  answersEl.innerHTML = "";
  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = answer.text;
    button.addEventListener("click", () => chooseAnswer(index, button));
    answersEl.appendChild(button);
  });
}

function chooseAnswer(index, selectedButton) {
  if (answered) return;
  answered = true;
  selectedAnswers[currentQuestion] = index;
  [...answersEl.querySelectorAll("button")].forEach((button) => {
    button.disabled = true;
    button.classList.remove("selected");
  });
  selectedButton.classList.add("selected");
  const chosen = quizQuestions[currentQuestion].answers[index];
  $("#quiz-feedback").textContent = chosen.message;
  nextButton.disabled = false;
  popDecor(5);
}

nextButton.addEventListener("click", () => {
  if (!answered) return;
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    $("#quiz-card").classList.add("hidden");
    $("#secret-message").classList.remove("hidden");
    $("#letter-body").textContent = "Gracias por este mes tan bello y hermoso que me has regalado, todo lo que hemos vivido y todo lo que hemos planeado hasta ahora lo guardo en el lugar más especial de mi corazón.\n\nEsta es solo el primer capítulo de una historia que deseo que sea lo más larga posible, me emociona todo lo que nos falta por vivir y todos los planes que tenemos.\n\nTe amo muchísimo mi amor. Feliz primer mes de novios. ♡";
    popDecor(22);
    $("#secret-message").scrollIntoView({ behavior: "smooth", block: "center" });
  }
});

$("#again-button").addEventListener("click", () => {
  currentQuestion = 0;
  selectedAnswers = [];
  $("#secret-message").classList.add("hidden");
  $("#quiz-card").classList.remove("hidden");
  renderQuestion();
  $("#juego").scrollIntoView({ behavior: "smooth" });
});

// Animación de dedicatorias: flores y corazones aparecen mientras la tarjeta se abre.
const modal = $("#dedication-modal");
const modalTitle = $("#dedication-title");
const modalText = $("#dedication-text");
const modalArt = $("#modal-art");
let lastArtButton = null;
function openDedication(index, trigger) {
  const item = dedications[index];
  if (!item) return;
  lastArtButton = trigger;
  modalTitle.textContent = item.title;
  modalText.textContent = item.text;
  modalArt.textContent = item.icon;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  popDecor(12);
  $("#close-dedication").focus();
}
function closeDedication() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
  if (lastArtButton) lastArtButton.focus();
}
document.querySelectorAll("[data-art]").forEach((button) => {
  button.addEventListener("click", () => openDedication(Number(button.dataset.art), button));
});
$("#close-dedication").addEventListener("click", closeDedication);
$("#modal-ok").addEventListener("click", closeDedication);
modal.addEventListener("click", (event) => { if (event.target === modal) closeDedication(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !modal.classList.contains("hidden")) closeDedication(); });

function popDecor(count = 8) {
  const layer = $(".floating-decor");
  const symbols = ["♥", "♡", "🌼", "✿", "✧"];
  for (let i = 0; i < count; i++) {
    const decor = document.createElement("span");
    decor.className = "floating-item";
    decor.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    decor.style.left = `${Math.random() * 100}%`;
    decor.style.fontSize = `${12 + Math.random() * 17}px`;
    decor.style.animationDuration = `${4 + Math.random() * 4}s`;
    decor.style.animationDelay = `${Math.random() * .6}s`;
    decor.style.color = Math.random() > .5 ? "rgba(184,120,69,.55)" : "rgba(225,190,70,.8)";
    layer.appendChild(decor);
    decor.addEventListener("animationend", () => decor.remove(), { once: true });
  }
}
popDecor(12);
renderQuestion();
