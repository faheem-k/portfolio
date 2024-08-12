document.addEventListener('DOMContentLoaded', () => {
  const words = document.querySelectorAll('.home-active');
  const intro = document.querySelector('.intro');
  const menu = document.querySelector('.navbar');
  const mainContent = document.querySelector('main');

  let currentIndex = 0;

  function showNextWord() {
      if (currentIndex < words.length) {
          words[currentIndex].style.display = 'block';
          const displayTime = currentIndex === 0 ? 1000 : 100;  // 1 second for the first word, 0.1 seconds for others
          setTimeout(() => {
              words[currentIndex].style.display = 'none';
              currentIndex++;
              showNextWord();
          }, displayTime);
      } else {
          setTimeout(() => {
              intro.classList.add('intro-hidden'); // Hide intro
              mainContent.style.visibility = 'visible'; // Show main content
              menu.classList.add('menu-show'); // Show menu
              document.body.style.overflow = 'auto'; // Allow scrolling
              initScrollAnimations(); // Initialize scroll animations
          }, 1000); // Delay before showing the main content
      }
  }

  showNextWord();
});

function initScrollAnimations() {
  const controller = new ScrollMagic.Controller();

  document.querySelectorAll('.service-item, .project-item').forEach((section) => {
      const tween = gsap.fromTo(section, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6 });
      new ScrollMagic.Scene({
          triggerElement: section,
          triggerHook: 0.9,
          reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  });

  document.querySelectorAll('.portfolio-header, .projects').forEach((section) => {
      const tween = gsap.fromTo(section, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6 });
      new ScrollMagic.Scene({
          triggerElement: section,
          triggerHook: 0.9,
          reverse: false
      })
      .setTween(tween)
      .addTo(controller);
  });
}

'use strict';


/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}
