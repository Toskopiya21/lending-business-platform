let element = document.querySelector(".header-bottom");

function isScrollAtTop() {
  if (window.scrollY === 0) {
    console.log("Скролл находится в самом начале страницы.");
    element.style.marginTop = "38px";
  } else {
    element.style.marginTop = 0;
    element.style.transition = ".3s ease-out";
  }
}

window.addEventListener("load", isScrollAtTop);
window.addEventListener("scroll", isScrollAtTop);
let isScrolled = false;

function handleFirstScroll() {
  if (!isScrolled) {
    console.log("Это был первый скролл!");
    element.classList.add("fix");
    element.style.marginTop = 0;
    isScrolled = true;
    window.removeEventListener("scroll", handleFirstScroll);
  }
}
window.addEventListener("scroll", handleFirstScroll);
