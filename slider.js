const left = document.querySelector("#left-side");
const slider = document.querySelector(".slider-grabber");
const root = document.querySelector(":root");
const sliderContainer = document.querySelector(".slider-container");

const handleOnMove = (event) => {
  const position = (event.clientX / window.innerWidth) * 100;
  root.style.setProperty(`--left-side-width`, `${position}%`);

  const leftSideOpacity = position < 70 ? 1 : 0;
  root.style.setProperty(`--left-side-title-opacity`, leftSideOpacity);
  root.style.setProperty(
    `--left-side-content-opacity`,
    leftSideOpacity ? 0 : 1
  );

  document.querySelectorAll("#left-side .side-title");
};

document.onmousemove = (event) => handleOnMove(event);

document.ontouchmove = (event) => handleOnMove(event.touches[0]);

sliderContainer.ontouchstart = () => {
  document.body.overflow = "hidden";
};

sliderContainer.ontouchend = () => {
  document.body.overflow = "auto";
};
