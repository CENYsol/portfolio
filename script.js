const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const scrollBtn = document.getElementById('scrollTopBtn');
let current = 1; // начинаем со второго (по центру)

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

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

updateCarousel();
