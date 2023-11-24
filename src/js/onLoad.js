import { FoodBoutiqueAPI } from './foodBoutiqueApi';
import refs from './refs';
import { renderPopularProducts } from './popularProduct';
import { renderProductsCards } from './productsList';
import { renderDiscountCards } from './discountProducts';

const foodBoutiqueApi = new FoodBoutiqueAPI();

window.addEventListener(`DOMContentLoaded`, onDOMContentLoaded);

async function onDOMContentLoaded() {
  try {
    let allProducts = await foodBoutiqueApi.fetchProductsByQuery();
    renderProductsCards(allProducts.results, refs.productsListEl);

    let popularProducts = await foodBoutiqueApi.fetchPopular();
    refs.popularListElement.innerHTML = renderPopularProducts(popularProducts);

    let discountProducts = await foodBoutiqueApi.fetchDiscount();
    renderDiscountCards(discountProducts, refs.discountProductsEl);
  } catch (err) {
    console.log('err');
  }
}