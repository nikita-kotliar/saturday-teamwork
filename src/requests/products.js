import apiInstance from '../services/api.js';

export const getProducts = async () => {
  const response = await apiInstance.get('/products');
  return response.data;
};

export const getProductsByID = async id => {
  const response = await apiInstance.get(`/products/${id}`);
  return response.data;
};
