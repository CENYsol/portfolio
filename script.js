const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
let current = 1; // центральная картинка

function updateCarousel() {
  const offset = -current * (items[0].offsetWidth + 20);
  track.style.transform = `translateX(${offset}px)`;

  items.forEach((item, index) => {
    item.classList.toggle('active', index === current);
  });
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % items.length;
  updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + items.length) % items.length;
  updateCarousel();
});

updateCarousel();
