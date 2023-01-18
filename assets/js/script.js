const nav = document.querySelector(".nav__list");
const navBars = document.querySelector(".open");
const navClose = document.querySelector(".close");
console.log(nav);
navBars.addEventListener("click", () => {
  nav.classList.toggle("display-nav");
  if (nav.classList.contains("display-nav")) {
    navClose.style.display = "block";
    navBars.style.display = "none";
  }
});

navClose.addEventListener("click", () => {
  nav.classList.toggle("display-nav");
  navClose.style.display = "none";
  navBars.style.display = "block";
});
