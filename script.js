const menu = document.querySelector(".mobile-nav");

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => menu.removeAttribute("open"));
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
