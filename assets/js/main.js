const menuClose = () => {
  document
    .querySelectorAll(".hamburger--open")
    .forEach((e) => e.classList.remove("hamburger--open"));

  document
    .querySelectorAll(".nav_items--open")
    .forEach((e) => e.classList.remove("nav_items--open"));
};

const menuOpen = () => {
  document
    .querySelectorAll(".hamburger")
    .forEach((e) => e.classList.add("hamburger--open"));

  document
    .querySelectorAll(".nav_items")
    .forEach((e) => e.classList.add("nav_items--open"));
};

const menuToggle = (e) => {
  if (e.srcElement.classList.contains("hamburger--open")) {
    menuClose();
  } else {
    menuOpen();
  }
};

window.onload = (event) => {
  menuClose();
  document
    .querySelectorAll(".nav_link")
    .forEach((e) => e.addEventListener("click", menuClose));
  document
    .querySelectorAll(".hamburger")
    .forEach((e) => e.addEventListener("click", menuToggle));
};
