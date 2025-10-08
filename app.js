// Navigation Bar
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Image Slider

const slides = document.querySelectorAll(".about-me__slider img");
let slideIndex = 0;
// let intervalId = null

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    // intervalId = setInterval(nextSlide, 10000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
  //clearInterval(intervalId);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}


// Fade
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".fade");

  const observerOptions = {
    threshold: 0.1, // Trigger the animation when at least 10% of the section is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("inview2");
      } else {
        entry.target.classList.remove("inview2");
      }
    });
  };

  const sectionObserver = new IntersectionObserver(
    observerCallback,
    observerOptions
  );

  sections.forEach((section) => {
    sectionObserver.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".type_it");

  const observerOptions = {
    threshold: 0.1, // Trigger the animation when at least 10% of the section is visible
  };

  new TypeIt("#simpleUsage", {
    strings: "Hi, I'm Nico.",
    speed: 50,
    waitUntilVisible: true,
  }).go();
});
