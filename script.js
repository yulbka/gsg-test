// slider

const slides = document.querySelector('.slides');
const sliderWidth = document.querySelector('.slider').offsetWidth;

const pagination = document.querySelector('.pagination');
pagination.addEventListener('click', (event) => {
  const target = event.target.closest('.dot');
  if (!target) return;
  let dots = document.querySelectorAll('.dot');
  dots.forEach((dot) => dot.classList.remove('dot_active'));
  target.classList.add('dot_active');
  slides.style.transform = `translateX(${-Number(target.dataset.index - 1) * sliderWidth - 2}px)`;
});

// F2 notification

const popup = document.querySelector('.popup');

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();  
  popup.classList.add('popup_active');
});

const popupBtn = document.querySelector('.popup__button');
popupBtn.addEventListener('click', () => {
  console.log('ok');
  popup.classList.remove('popup_active');
});