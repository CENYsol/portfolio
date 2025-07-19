const items = document.querySelectorAll('.carousel-item');
const carouselInner = document.querySelector('.carousel-inner');
let index = 0;

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

function updateCarousel() {
  const offset = -index * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;

  items.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
}
