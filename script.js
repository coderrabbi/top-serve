// navbar
const navIcon = document.getElementById("menu__icon");
const menu = document.getElementById("mobile__menu");

navIcon.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

// faq

const faq = document.getElementsByClassName("faq-page");
let i;
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
      body.style.opacity = 0;
    } else {
      body.style.display = "block";
      body.style.opacity = 1;
    }
  });
}
