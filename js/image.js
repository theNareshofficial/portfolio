const slider = document.querySelector ('.slides');
const slides = document.querySelectorAll('.slides img');

let slideIndex = 0;
const slideInterval = 3000; // Change slide every 3 seconds (adjust as needed)

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlidePosition();
}

function updateSlidePosition() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Start the automatic sliding
let slideIntervalId = setInterval(nextSlide, slideInterval);

// Pause the automatic sliding on mouseover
slider.addEventListener('mouseover', () => {
  clearInterval(slideIntervalId);
});

// Resume the automatic sliding on mouseout
slider.addEventListener('mouseout', () => {
  slideIntervalId = setInterval(nextSlide, slideInterval);
});
