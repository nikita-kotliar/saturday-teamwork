import apiInstance from '../services/api.js';

export const getProducts = async () => {
    const response = await apiInstance.get('/products');
    return response.data;
};

