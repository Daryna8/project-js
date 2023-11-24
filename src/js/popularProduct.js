import iconPath from '../icons/icons.svg';

function popularProductTemplate(popular) {
  const { _id: id, name, img, category, size, popularity } = popular;
  return `<li class="popular-item" data-product-id='${id}'>
      <div class="popular-product-img">
        <img src="${img}" alt="" width="56" height="56" />
      </div>
      <button class="cart-btn" type="button">
        <svg width="12" height="12">
          <use href="${iconPath}#icon-cart"></use>
        </svg>
      </button>
      <div class="popular-item-info">
        <h3 class="popular-info-title">${name}</h3>
        <p class="popular-category">
          <span class="popular-accent">Category:</span> ${category}
        </p>
        <p class="popular-info-descr">
          <span class="popular-accent">Size:</span>${size}
          <span class="popular-accent">Popularity:</span> ${popularity}
        </p>
      </div>
    </li>`;
}

function popularProductsTemplate(popularArr) {
  return popularArr.map(popularProductTemplate).join('');
}

export function renderPopularProducts(popularArr) {
  return popularProductsTemplate(popularArr);
}