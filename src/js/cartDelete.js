import cartRefs from './cartRefs';
import storage from './storage';
import { onCartPageLoad } from './onCartPageLoad.js';
import { updateCartFromStorage, updateCartOnHeader } from './header.js';

cartRefs.deleteAll.addEventListener('click', onDeleteAllClick);
cartRefs.productList.addEventListener('click', onDeleteItemClick);

function onDeleteAllClick() {
  localStorage.clear();
  // storage.remove('localKey');
  // storage.save('localKey', []);
  cartRefs.productList.innerHTML = '';
  updateCartFromStorage(cartRefs.cartSpan);
  updateCartOnHeader();
  cartRefs.cartContent.classList.add('visually-hidden');
  cartRefs.emptyCart.classList.remove('visually-hidden');
}
function onDeleteItemClick(e) {
  if (!e.target.closest('.delete-btn.js-delete')) {
    return;
  }
  const cardEl = e.target.closest('li');
  const id = cardEl.dataset.productId;

  const oldCartArr = storage.load('localKey');
  let newCartArr = [];

  for (let i = 0; i < oldCartArr.length; i++) {
    const element = oldCartArr[i];
    if (!(element === id)) {
      newCartArr.push(element);
    }
  }

  storage.remove('localKey');

  if (newCartArr.length === 0) {
    cartRefs.cartContent.classList.add('visually-hidden');
    cartRefs.emptyCart.classList.remove('visually-hidden');
    updateCartFromStorage(cartRefs.cartSpan);
    updateCartOnHeader();
    return;
  }

  storage.save('localKey', newCartArr);

  cartRefs.productList.innerHTML = '';

  onCartPageLoad();
}
