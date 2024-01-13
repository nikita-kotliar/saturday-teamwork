import { getProducts } from '../requests/products.js';
import { createProductsMarkup } from '../services/markupService.js';

export const renderAllProducts = async() => {
    const ul = document.getElementById('allProducts');
    const data = await getProducts();
    console.log(data);
    ul.insertAdjacentHTML('beforeend', createProductsMarkup(data.products));
};
