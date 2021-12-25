var featuredButton = document.querySelector('.featured__button');
var modalContainer = document.querySelector('.modal__container');
var modal = document.querySelector('.modal');

featuredButton.addEventListener('click', function () {
  modalContainer.classList.remove('modal__container--close');
})
;

modalContainer.addEventListener('click', function () {
  modalContainer.classList.add('modal__container--close');
})
;

modal.addEventListener('click', function (e) {
  e.stopPropagation();
})
;
