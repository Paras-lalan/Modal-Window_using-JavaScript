'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//NOTE qurySelectorALl used to select all 3 buttons with the same class.
const btnShowModal = document.querySelectorAll('.show-modal');

//FUNCTION open modal function.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//FUNCTION close modal function.
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);

//NOTE closing the modal by clicking on X, clicking on overlay and pressing Esc key
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
