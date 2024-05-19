// set the section ids and interval time
const sectionIds = ["mainslideshow", "projects"];
const intervalTime = 5000;

// loop through each section and initialize its slideshow
sectionIds.forEach((sectionId) => {
  let slideIndex = 0;
  const slides = document.querySelectorAll(`#${sectionId} .mySlides`);
  const prevBtn = document.querySelector(`#${sectionId} .prev`);
  const nextBtn = document.querySelector(`#${sectionId} .next`);

  // show the first slide and start the slideshow interval
  showSlide(slideIndex);
  setInterval(() => {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }, intervalTime);

  // add click event listeners to the prev and next buttons
  prevBtn.addEventListener("click", () => {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
  });
  nextBtn.addEventListener("click", () => {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  });

  // function to show the current slide
  function showSlide(index) {
    // hide all slides and show the current one
    slides.forEach((slide) => {
      slide.style.display = "none";
    });
    slides[index].style.display = "block";
  }
});

const sidebar = document.querySelector('#mySidebar');
const closeButton = document.querySelector('.closebtn');
const navLinks = document.querySelectorAll('.nav-link');
const burgerIcon = document.querySelector('.burger-icon');

function openNav() {
  sidebar.style.width = '250px';
  document.body.style.overflow = 'hidden';
}

function closeNav() {
  sidebar.style.width = '0';
  document.body.style.overflow = 'auto';
}

function toggleMenu() {
  sidebar.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
  burgerIcon.classList.toggle('active');
}

closeButton.addEventListener('click', closeNav);
navLinks.forEach(link => link.addEventListener('click', closeNav));
burgerIcon.addEventListener('click', toggleMenu);
