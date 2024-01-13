export const createMarkupProduct = ({ title, price, images, description }) => {
  return `<li>
        <h2>${title}</h2>
        <p>${price}</p>
        <img src="${images[0]}" alt="${description}">
      </li>`;
};

export const createProductsMarkup = products => {
  return products.map(product => createMarkupProduct(product)).join();
};
