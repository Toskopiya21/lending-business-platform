const slideContainer = document.querySelector(".container");
const slide = document.querySelector(".slides");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 3000;
let index = 1;
let slideId;
let slides = document.querySelectorAll(".slide");
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = "first-clone";
lastClone.id = "last-clone";
slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const stopSlide = () => {
  clearInterval(slideId);
};

const updateDots = (n) => {
  var dots = document.querySelectorAll(".dot");
  dots.forEach(function (dot, i) {
    var dotIndex = index % (slides.length - 1);
    if (n === slides.length - 1) {
      dotIndex = 1;
    }
    if (n === 0) {
      dotIndex = slides.length - 2;
    }
    dot.classList.toggle("active", i + 1 === dotIndex);
  });
};

const getSlides = () => document.querySelectorAll(".slide");

slide.addEventListener("transitionend", () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  if (index >= slides.length - 1) return;
  index++;
  moveToSlide(index);
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  moveToSlide(index);
};

const moveToSlide = (n) => {
  slide.style.transition = ".7s ease-out";
  slide.style.transform = `translateX(${-slideWidth * n}px)`;
  updateDots(n);
};

slideContainer.addEventListener("mouseenter", () => {
  clearInterval(slideId);
});

var dotsContainer = document.getElementById("slider-dots");
for (i = 1; i <= slides.length; i++) {
  var dot = document.createElement("div");
  dot.classList.add("dot");
  dot.addEventListener(
    "click",
    (function (i) {
      console.log("Cicle, " + i);
      return function () {
        index = i;
        moveToSlide(i);
      };
    })(i)
  );
  dotsContainer.appendChild(dot);
}

dotsContainer.addEventListener("mouseleave", stopSlide);

slideContainer.addEventListener("mouseleave", startSlide);
slideContainer.addEventListener("mouseenter", stopSlide);
nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviousSlide);
slides = getSlides();
startSlide();
updateDots(1);
