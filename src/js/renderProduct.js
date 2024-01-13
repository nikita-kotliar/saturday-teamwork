import { getProductsByID } from '../requests/products.js';
import { createMarkupProduct } from '../services/markupService.js';

const productForm = document.getElementById('singleProductForm');

export function renderProduct() {
  const singleProduct = document.getElementById('singleProduct');

  productForm.addEventListener('submit', async event => {
    event.preventDefault();
    const id = event.target.elements.id.value;
    const data = await getProductsByID(id);
    singleProduct.insertAdjacentHTML('beforeend', createMarkupProduct(data));
  });
}
