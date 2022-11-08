const span = document.querySelector("span.contact");
const header = document.querySelector("header");

document.addEventListener("scroll", (e) => {
  const scroll = window.scrollY;

  if (scroll > 10) {
    span.classList.add("visible");
    header.classList.add("border");
  } else {
    span.classList.remove("visible");
    header.classList.remove("border");
  }
});
