'use strict';

//TODO Открытие модального окна ---------------------------------------------------------------------
document.addEventListener('click', event => {
    const targetButtonShow = event.target.closest('.modal-show');
    if (!targetButtonShow) return;
    // Уверены что это была нажата кнопка вызова окна, запускаем функцию показа
    showModal.call(targetButtonShow); // Контекстом будет целевая кнопка
    // При каждом открытии окна, запускаем слушатель нажатия клавиш
    document.addEventListener('keydown', closeModalOnKey);
});

function showModal() {
    const typeModal = this.dataset.modal;
    const modalWrap = document.querySelector(typeModal);
    // Добляем плавность всем поведениям модального окна
    modalWrap.style.transition = '0.25s ease-out';
    // Показываем наш оверлей и окно
    modalWrap.classList.remove('hide-modal');
    // Убираем прокрутку
    document.body.style.overflowY = 'hidden';
}

//TODO Закрытие модального окна ---------------------------------------------------------------------
const allModal = document.querySelectorAll('.modal-wrap');
document.addEventListener('click', event => {
    const target = event.target;
    const closeButton = target.classList.contains('close-modal'); // Была нажата кнопка закрытия?
    const targetOverlay = target.classList.contains('modal-wrap'); // Был клик по оверлею?
    // Если было нажато одно из двух, тогда завершаем работу с модалкой
    if (closeButton || targetOverlay) {
        closeModal();
        document.removeEventListener('keydown', closeModalOnKey);
    }
});

// TODO Закрытие всех окон и возврат прокрутки
function closeModal() {
    // Закрываем все возможные модальные окна
    allModal.forEach(modal => {
        modal.classList.add('hide-modal');
    });
    // Возвращаем прокрутку
    document.body.style.overflowY = '';
}
// TODO Закрытие окна на Escape
function closeModalOnKey(event) {
    if (event.code == 'Escape') {
        // Скрываем все возможные окна и возвращаем прокрутку
        closeModal();
        // Если нажали Esc, удаляем этот обработчик с документа
        document.removeEventListener('keydown', closeModalOnKey);
    }
    // console.warn(event.code);
}