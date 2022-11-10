const left = document.querySelector("#left-side");
const slider = document.querySelector(".slider-grabber");
const root = document.querySelector(":root");
const sliderContainer = document.querySelector(".slider-container");

let terminalRunning = false;

const backendTerminalXPos = document
  .querySelector(".terminal.terminal-dark")
  .getBoundingClientRect().x;

const handleOnMove = (event) => {
  const position = (event.clientX / window.innerWidth) * 100;
  root.style.setProperty(`--left-side-width`, `${position}%`);

  if (!terminalRunning && event.x <= backendTerminalXPos) typeWriter();

  // const leftSideOpacity = position < 70 ? 1 : 0;
  // root.style.setProperty(`--left-side-title-opacity`, leftSideOpacity);
  // root.style.setProperty(
  //   `--left-side-content-opacity`,
  //   leftSideOpacity ? 0 : 1
  // );

  // document.querySelectorAll("#left-side .side-title");
};

document.onmousemove = (event) => handleOnMove(event);

document.ontouchmove = (event) => handleOnMove(event.touches[0]);

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
