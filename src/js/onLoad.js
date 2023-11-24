import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import refs from './refs';
import { renderPopularProducts } from './popularProduct';
import { renderProductsCards } from './productsList';
import { renderDiscountCards } from './discountProducts';
import { updateCartOnHeader } from './header';
import { checkProducts } from './checkProducts.js'
import Storage from './storage.js'

const STORAGE_KEY = 'localKey';

const foodBoutiqueApi = new FoodBoutiqueAPI();

window.addEventListener(`DOMContentLoaded`, onDOMContentLoaded);

async function onDOMContentLoaded() {
  try {
    console.log('here');
    updateCartOnHeader();

    let allProducts = await foodBoutiqueApi.fetchProductsByQuery();
    renderProductsCards(allProducts.results, refs.productsListEl);

    let popularProducts = await foodBoutiqueApi.fetchPopular();
    refs.popularListElement.innerHTML = renderPopularProducts(popularProducts);

    let discountProducts = await foodBoutiqueApi.fetchDiscount();
    renderDiscountCards(discountProducts, refs.discountProductsEl);

    checkProducts(Storage.load(STORAGE_KEY))
  } catch (err) {
    console.log('err');
  }
}
