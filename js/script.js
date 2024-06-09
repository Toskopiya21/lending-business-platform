// Инициализация переменных
let currentSlide = 0;
let isAnimating = false;
const slides = document.querySelectorAll(".slide"); // Класс .slide должен быть присвоен каждому изображению
const totalSlides = slides.length;
const nextControl = document.querySelector(".next-control"); // Класс для кнопки "Следующий"
const indicatorsContainer = document.querySelector(".indicators"); // Контейнер для индикаторов

// Функция для создания индикаторов
function createIndicators() {
  for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement("span");
    indicator.classList.add("indicator");
    indicator.dataset.slideTo = i;
    indicatorsContainer.appendChild(indicator);
  }
}

// Функция для обновления индикаторов
function updateIndicators() {
  document.querySelectorAll(".indicator").forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentSlide);
  });
}

// Функция для перехода к следующему слайду
function goToNextSlide() {
  if (isAnimating) return;
  isAnimating = true;
  const nextSlide = (currentSlide + 1) % totalSlides;
  slides[nextSlide].style.left = "100%";
  slides[currentSlide].style.left = 0;

  // Анимация слайдера
  const slideAnimation = setInterval(() => {
    slides[nextSlide].style.left =
      parseInt(slides[nextSlide].style.left, 10) - 2 + "%";
    slides[currentSlide].style.left =
      parseInt(slides[currentSlide].style.left, 10) - 2 + "%";

    if (slides[nextSlide].style.left === "0%") {
      clearInterval(slideAnimation);
      currentSlide = nextSlide;
      isAnimating = false;
      updateIndicators();
    }
  }, 10);
}

// Обработчик клика для перехода к следующему слайду
nextControl.addEventListener("click", goToNextSlide);

// Обработчик клика для индикаторов
indicatorsContainer.addEventListener("click", (e) => {
  const targetIndicator = e.target;
  if (!targetIndicator.classList.contains("indicator")) return;
  const slideTo = parseInt(targetIndicator.dataset.slideTo, 10);
  if (slideTo === currentSlide || isAnimating) return;
  currentSlide = slideTo;
  slides.forEach((slide, index) => {
    slide.style.left = `${(index - currentSlide) * 100}%`;
  });
  updateIndicators();
});

// Инициализация слайдера
function initSlider() {
  createIndicators();
  updateIndicators();
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
}

initSlider();
