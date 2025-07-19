const items = document.querySelectorAll('.carousel-item');
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
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}
