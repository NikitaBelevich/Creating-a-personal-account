'use strict';

const rulesForward = document.getElementById('rules-forward');
const rulesBack = document.getElementById('rules-back');
const modalSlide = document.querySelector('.modal-window__slider-container');

rulesForward.addEventListener('click', () => {
    // Смещаем наш слайд на 350px влево
    modalSlide.classList.toggle('modal-window_slide-active');
});

rulesBack.addEventListener('click', () => {
    // Возвращаем слайд
    modalSlide.classList.toggle('modal-window_slide-active');
});
