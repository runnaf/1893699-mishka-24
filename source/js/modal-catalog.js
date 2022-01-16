var cardPrices = document.querySelectorAll('.product-card__icon');
var modal = document.querySelector('.modal');
var modalWrapper = document.querySelector('.modal__wrapper');


for (const cardPrice of cardPrices) {
  cardPrice.addEventListener('click', function () {
    modal.classList.remove('modal--close');
  });
}
;

modal.addEventListener('click', function () {
  modal.classList.add('modal--close');
})
;

modalWrapper.addEventListener('click', function (e) {
  e.stopPropagation();
})
;
