const allProductsWrapperEl = document.querySelector('.all-products');
const productsListEl = document.querySelector('#products-list .products-list');
const popularListElement = document.querySelector('.popular-list');
const cartCountSpan = document.querySelector('.header-cart-span');
const categorySelectEl = document.querySelector('#categories');
const modalEl = document.querySelector('[data-modal]');
const discountProductsEl = document.querySelector('.discount-products');
const footerFormEl = document.querySelector('.footer-form');
const filtersFormSearchEL = document.querySelector('.filters-form-search');
const searchInputEl = document.querySelector('.search-input');
const nothingFoundEl = document.querySelector('div.nothing-found');
const btnUpEl = document.querySelector('button.btn-up');
const filtersBlockEl = document.querySelector('.filters-block');

export default {
  allProductsWrapperEl,
  productsListEl,
  popularListElement,
  cartCountSpan,
  categorySelectEl,
  modalEl,
  discountProductsEl,
  footerFormEl,
  filtersFormSearchEL,
  searchInputEl,
  nothingFoundEl,
  btnUpEl,
  filtersBlockEl
};
