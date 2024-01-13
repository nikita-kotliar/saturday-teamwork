export const createProductsMarkup = products => {
    return products.map(
      ({ title, price, images, description }) => `<li>
        <h2>${title}</h2>
        <p>${price}</p>
        <img src="${images[0]}" alt="${description}">
      </li>`
    ).join();
}
