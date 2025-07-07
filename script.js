// Смена темы
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Анимации при скролле
AOS.init();

// Загружаем работы
fetch('works.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('works-container');
    data.forEach(item => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.dataset.category = item.category;

      slide.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <p>${item.title}</p>
      `;
      container.appendChild(slide);
    });

    // Инициализация Swiper
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      }
    });

    // Фильтрация
    const buttons = document.querySelectorAll('.filters button');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        document.querySelectorAll('.swiper-slide').forEach(slide => {
          if (filter === 'all' || slide.dataset.category === filter) {
            slide.style.display = 'flex';
          } else {
            slide.style.display = 'none';
          }
        });
        swiper.update();
      });
    });
  });
