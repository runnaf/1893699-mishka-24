var cardPrices = document.querySelectorAll('.product-card__icon');
var modalContainer = document.querySelector('.modal__container');
var modal = document.querySelector('.modal');


for (const cardPrice of cardPrices) {
  cardPrice.addEventListener('click', function () {
    modalContainer.classList.remove('modal__container--close');
  });
}
;

modalContainer.addEventListener('click', function () {
  modalContainer.classList.add('modal__container--close');
})
;

modal.addEventListener('click', function (e) {
  e.stopPropagation();
})
;
