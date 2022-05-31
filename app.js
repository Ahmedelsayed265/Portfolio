//-------gsap intro animation---------------------------------------------------------//
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.25 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
//------------before------------------------------------------------------------------//
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo("#home", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("#about", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("#skills", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("#services", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("#projects", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("#blog", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".to-top", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".testimonial", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
//--------------(light-dark)theme-----------------------------------------------------//
theme_icon = document.querySelector("#theme i");
theme_icon.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    theme_icon.classList.add("fa-sun");
    theme_icon.classList.remove("fa-moon");
    document.querySelector(".logo a img").src = "images/LOGO2.png";
  } else {
    theme_icon.classList.add("fa-moon");
    theme_icon.classList.remove("fa-sun");
    document.querySelector(".logo a img").src = "images/LOGO.png";
  }
});
//-------typed.js landing section--------------------------------------------------//
$("document").ready(function () {
  var typed = new Typed("#typed", {
    strings: [
      "Website designer.",
      "Senior Front End.",
      "Back End devloper.",
      "Full Stack developer.",
    ],
    backSpeed: 80,
    typeSpeed: 100,
    loop: true,
    shuffle: true,
  });
  //----------- testimonial -------------------------------------------------------//
  let swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    slidesPerView: 3,
    grabCursor: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      350: {
        slidesPerView: 1,
      },
    },
  });
});
//--------------about section counter function----------------------------//
let numbers = document.querySelectorAll(".number");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
//----------------------ON Scroll Actions-----------------------//
let nav = document.getElementById("nav");
let aboutSec = document.getElementById("about");
window.onscroll = function () {
  if (this.scrollY >= about.offsetTop) {
    //=============about section counter=============//
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
    //=============about section counter============//
    nav.classList.remove("navigation");
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
    nav.classList.add("navigation");
  }
};
//------------ responsive nav ----------//
let navBtn = document.getElementById("nav-btn");
let navigation = document.querySelector(".navigation");
navBtn.addEventListener("click", () => {
  if (navBtn.classList.contains("fa-bars")) {
    navBtn.classList.remove("fa-bars");
    navBtn.classList.add("fa-times");
    navigation.classList.add("active");
  } else {
    navBtn.classList.remove("fa-times");
    navBtn.classList.add("fa-bars");
    navigation.classList.remove("active");
  }
});
//---------------go down----------------------//
let button = document.getElementById("scroll");
button.addEventListener("click", () => {
  scrollTo({
    top: about.offsetTop,
    behavior: "smooth",
  });
});
//-----------navbar(click-scroll)-----------------//
let navLinks = document.querySelectorAll(".list");
let sections = document.querySelectorAll(".section");
let current;
window.addEventListener("scroll", () => {
  //================to-top============//
  let top = document.getElementById("top");
  this.scrollY >= 635
    ? top.classList.add("active")
    : top.classList.remove("active");
  //=============to-top=============//
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});
//----------Acordions----------------//
let Acordions = document.querySelectorAll(".Acordion");
let foldDiv = document.querySelectorAll(".skill");
let foldIcon = document.querySelectorAll(".open-icon i");
for (let i = 0; i < foldIcon.length; i++) {
  foldIcon[i].addEventListener("click", () => {
    if (!foldIcon[i].classList.contains("active")) {
      for (let j = 0; j < foldIcon.length; j++) {
        foldIcon[j].classList.remove("active");
        Acordions[j].classList.remove("active");
      }
      foldIcon[i].classList.add("active");
      Acordions[i].classList.add("active");
    } else {
      foldIcon[i].classList.remove("active");
      Acordions[i].classList.remove("active");
    }
  });
}
for (let i = 0; i < foldDiv.length; i++) {
  foldDiv[i].addEventListener("click", () => {
    if (!foldIcon[i].classList.contains("active")) {
      for (let j = 0; j < foldIcon.length; j++) {
        foldIcon[j].classList.remove("active");
        Acordions[j].classList.remove("active");
      }
      foldIcon[i].classList.add("active");
      Acordions[i].classList.add("active");
    } else {
      foldIcon[i].classList.remove("active");
      Acordions[i].classList.remove("active");
    }
  });
}
//---------- qualificatin section ------------//
let work = document.getElementById("work");
let quali = document.getElementById("quali");
let qualSection = document.getElementById("award");
work.addEventListener("click", () => {
  qualSection.innerHTML = `
                <div class="col-lg-3 col-5 d-flex align-items-lg-end align-items-center flex-column">
                    <div class="qual">
                        <h5>Software Engineer</h5>
                        <p class="mb-1">Microsoft - Remotely</p>
                        <p class="mb-0"><i class="far fa-calendar-alt"></i> 2023 - 2025</p>
                    </div>
                    <div class="qual"></div>
                    <div class="qual">
                        <h5>Web Development</h5>
                        <p class="mb-1">Figma Remotely</p>
                        <p class="mb-0"><i class="far fa-calendar-alt"></i> 2022 - 2025</p>
                    </div>
                </div>
                <div class="col-1 d-flex align-items-center flex-column">
                    <div class="first">
                        <span class="circle"></span>
                        <span class="line"></span>
                        <span class="circle"></span>
                    </div>
                    <div class="first">
                        <span class="line"></span>
                        <span class="circle"></span>
                    </div>
                </div>
                <div class="col-lg-3 col-5 d-flex align-items-lg-start align-items-center flex-column p-lg-0 ps-4">
                    <div class="qual"></div>
                    <div class="qual">
                        <h5>Back-end developer</h5>
                        <p class="mb-0">Almotoron Egypt</p>
                        <p class="mb-0"><i class="far fa-calendar-alt"></i> 2024 - 2025</p>
                    </div>
                </div
  `;
});
quali.addEventListener("click", () => {
  qualSection.innerHTML = `
                <div class="col-lg-3 col-5 d-flex align-items-lg-end align-items-center flex-column">
                    <div class="qual">
                        <h5>Computer Engineer</h5>
                        <p class="mb-1">Menofia- University</p>
                        <p class="mb-0"><i class="far fa-calendar-alt"></i> 2021 - 2025</p>
                    </div>
                    <div class="qual"></div>
                    <div class="qual">
                        <h5>Web Development</h5>
                        <p class="mb-1">Menofia- University</p>
                        <p class="mb-0"><i class="far fa-calendar-alt"></i> 2020 - 2023</p>
                    </div>
                </div>
                <div class="col-1 d-flex align-items-center flex-column">
                    <div class="first">
                        <span class="circle"></span>
                        <span class="line"></span>
                        <span class="circle"></span>
                    </div>
                    <div class="first">
                        <span class="line"></span>
                        <span class="circle"></span>
                    </div>
                    <div class="first">
                        <span class="line"></span>
                        <span class="circle"></span>
                    </div>
                </div>
                <div class="col-lg-3 col-5 d-flex align-items-lg-start align-items-center flex-column p-lg-0 ps-4">
                    <div class="qual"></div>
                    <div class="qual">
                        <h5>Back-end development</h5>
                        <p class="mb-0">ITI - institute</p>
                        <p class="mb-0"><i class="far fa-calendar-alt"></i> 2021 - 2025</p>
                    </div>
                    <div class="qual"></div>
                    <div class="qual">
                        <h5>Master in Ui/UX</h5>
                        <p class="mb-0">ITI - institute</p>
                        <p class="mb-0"><i class="far fa-calendar-alt"></i> 2021 - 2025</p>
                    </div>
                </div>
  `;
});
//---------- services section -----------//
let brandingLink = document.querySelectorAll(".brandingLink");
let pop_up = document.querySelectorAll(".pop_up");
let close = document.querySelectorAll(".close");
let container = document.querySelector(".body");
for (let i = 0; i < brandingLink.length; i++) {
  brandingLink[i].addEventListener("click", () => {
    for (let j = 0; j < brandingLink.length; j++) {
      pop_up[j].classList.remove("active");
    }
    pop_up[i].classList.add("active");
    container.classList.add("active");
  });
  close[i].addEventListener("click", closed);
  close[i].addEventListener("click", () => {
    container.classList.remove("active");
  });
}
function closed() {
  for (let i = 0; i < pop_up.length; i++) {
    pop_up[i].classList.remove("active");
  }
}
//---------------------- portfolio slider ------------------------//
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".right-btn");
const prevButton = document.querySelector(".left-btn");
const navIndicator = document.querySelector(".carousel_nav");
const dots = Array.from(navIndicator.children);
const slideWidth = slides[0].getBoundingClientRect().width;
//arrange the slides next to one another
const setSlidePostion = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePostion);
// next btn //
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = navIndicator.querySelector(".curunt_slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  disableButtons(slides, prevButton, nextButton, nextIndex);
});
// prev btn //
prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = navIndicator.querySelector(".curunt_slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  disableButtons(slides, prevButton, nextButton, prevIndex);
});
// dotsnav //
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("curunt_slide");
  targetDot.classList.add("curunt_slide");
};
const disableButtons = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex == 0) {
    prevButton.classList.add("disable");
    nextButton.classList.remove("disable");
  } else if (targetIndex == slides.length - 1) {
    prevButton.classList.remove("disable");
    nextButton.classList.add("disable");
  } else {
    prevButton.classList.remove("disable");
    nextButton.classList.remove("disable");
  }
};
navIndicator.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = navIndicator.querySelector(".curunt_slide");
  let targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  disableButtons(slides, prevButton, nextButton, targetIndex);
});
//Copy right
let currentYear = document.getElementById("current-year");
let Year = new Date().getFullYear();
currentYear.innerHTML = Year;
