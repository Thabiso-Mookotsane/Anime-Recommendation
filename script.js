// Carousel
let position = 0;
function moveCarousel(direction) {
  const track = document.querySelector('.carousel-track');
  const card = document.querySelector('.carousel-track .anime-card');
  const cardWidth = card.offsetWidth + 16;
  const visibleCount = Math.floor(track.offsetWidth / cardWidth);
  const max = track.children.length - visibleCount;

  position += direction;
  if (position < 0) position = 0;
  if (position > max) position = max;

  track.style.transform = `translateX(-${position * cardWidth}px)`;
}

// Slideshow
let slideIndex = 0;
function showSlide(index) {
  const slides = document.querySelectorAll('.slideshow-container .anime-card');
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  const slides = document.querySelectorAll('.slideshow-container .anime-card');
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(slideIndex);
  setInterval(nextSlide, 5000);
});
