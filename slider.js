const left = document.querySelector("#left-side");
const slider = document.querySelector(".slider-grabber");
const root = document.querySelector(":root");
const sliderContainer = document.querySelector(".slider-container");
const sliderGrabber = document.querySelector(".slider-grabber");

let terminalRunning = false;

const backendTerminalXPos = document
  .querySelector(".terminal.terminal-dark")
  .getBoundingClientRect().x;

document.querySelector("#terminal-today-date").innerText =
  new Date().toString();

let i = 0;
var txt = " list-skills --backend";
var speed = 85;

function typeWriter() {
  terminalRunning = true;
  if (i < txt.length) {
    document.querySelector("#typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelectorAll(".terminal-dark .hidden").forEach((el) => {
      el.classList.remove("hidden");
    });
  }
}

let mouseIsDown = false;

sliderGrabber.addEventListener("mousedown", function (e) {
  e.preventDefault();
  mouseIsDown = true;
});

sliderGrabber.addEventListener("touchstart", function (e) {
  e.preventDefault();
  mouseIsDown = true;
});

document.body.addEventListener("mouseup", () => (mouseIsDown = false));
document.addEventListener("mouseup", () => (mouseIsDown = false));
document.body.addEventListener("touchend", () => (mouseIsDown = false));
document.addEventListener("touchend", () => (mouseIsDown = false));

document.addEventListener("mousemove", (e) => {
  e.preventDefault();
  e.stopPropagation();
  handleMove(e);
});
document.addEventListener("touchmove", (e) => {
  e.preventDefault();
  e.stopPropagation();
  handleMove(e.touches[0]);
});

const handleMove = (event) => {
  if (mouseIsDown) {
    const widthInPercent = (event.clientX / window.innerWidth) * 100;

    const position = Math.min(Math.max(widthInPercent, 0), 100);
    root.style.setProperty(`--left-side-width`, `${position}%`);
    if (!terminalRunning && event.clientX <= backendTerminalXPos) typeWriter();
  }
};
