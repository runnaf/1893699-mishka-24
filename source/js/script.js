var navSite = document.querySelector('.site-nav');
var navUser = document.querySelector('.user-nav');
var navToggle = document.querySelector('.page-header__toggle');
var navWrapper = document.querySelector('.page-header__wrapper')


navSite.classList.remove('page-header__nav--nojs');
navUser.classList.remove('page-header__nav--nojs');
navToggle.classList.remove('page-header__toggle--nojs');
navWrapper.classList.remove('page-header__wrapper--nojs');

navSite.classList.add('page-header__nav--closed');
navUser.classList.add('page-header__nav--closed');
navToggle.classList.add('page-header__toggle--closed');

navToggle.addEventListener('click', function () {
  if (navSite.classList.contains('page-header__nav--closed')) {
    navSite.classList.remove('page-header__nav--closed');
    navSite.classList.add('page-header__nav--open');
  } else {
    navSite.classList.add('page-header__nav--closed');
    navSite.classList.remove('page-header__nav--open');

  }
  if (navUser.classList.contains('page-header__nav--closed')) {
    navUser.classList.remove('page-header__nav--closed');
    navUser.classList.add('page-header__nav--open');
  } else {
    navUser.classList.add('page-header__nav--closed');
    navUser.classList.remove('page-header__nav--open');
  }

  if (navToggle.classList.contains('page-header__toggle--closed')) {
    navToggle.classList.remove('page-header__toggle--closed');
    navToggle.classList.add('page-header__toggle--open');
  } else {
    navToggle.classList.add('page-header__toggle--closed');
    navToggle.classList.remove('page-header__toggle--open');
  }
});
