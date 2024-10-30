'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// close model
const openModal = function () {
  console.log('Button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
// close model
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModal.length; i++)
  // open model
  btnsOpenModal[i].addEventListener('click', openModal);
// btnsOpenModal[i].addEventListener('click', function () {
//     console.log('Button Clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// });

btnCloseModal.addEventListener('click', closeModal);
// close model by clicking on overlay area
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
