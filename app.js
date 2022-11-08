const $ = (x) => document.querySelector(x);
const $$ = (x) => document.querySelectorAll(x);
const clamp = (min, max, val) => Math.min(Math.max(val, min), max);

const introduction = $(".introduction");
const skills = $(".skills");
const rootStyle = $(":root");

document.addEventListener("scroll", (e) => {
  const introRect = introduction.getBoundingClientRect();
  const skillsRect = skills.getBoundingClientRect();

  //   console.log(skillsRect);

  if (Math.abs(introRect.y) - 100 < introRect.height) {
    moveBar({
      percent: Math.abs(introRect.y / introRect.height),
      percentStart: 50,
      prefix: "--retro-beige",
    });
  }

  if (skillsRect.y < 0 && Math.abs(skillsRect.y) - 100 < skillsRect.height) {
    moveBar({
      percent: Math.abs(skillsRect.y / skillsRect.height),
      percentStart: 60,
      prefix: "--retro-blue",
    });
  }
});

const moveBar = ({ prefix, percent, percentStart }) => {
  const deg = 135 + Math.round(45 * percent);
  //   rootStyle.style.setProperty(`${prefix}-deg`, `${clamp(135, 180, deg)}deg`);

  const percentStyle = percentStart - Math.round(percentStart * percent);
  root.style.setProperty(
    `${prefix}-per`,
    `${clamp(0, percentStart, percentStyle)}%`
  );
};
