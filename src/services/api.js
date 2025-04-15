import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});

export const getProducts = async (offset, limit) => {
  const res = await api.get(`/products?offset=${offset}&limit=${limit}`);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};
