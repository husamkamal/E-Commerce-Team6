import axios from 'axios';

export function getProductsNames() {
  const promise = axios.get('/api/v1/names');
  const dataPromise = promise.then((response) => response.data);
  return dataPromise;
}
export function getCategories() {
  const promise = axios.get('/api/v1/categories');
  const dataPromise = promise.then((response) => response.data);
  return dataPromise;
}

export default function getProducts({ category, search }, controller) {
  const promise = axios.get(
    `/api/v1/products?category=${category}&search=${search}`,
    {
      signal: controller.signal,
    }
  );
  const dataPromise = promise.then((response) => response.data);
  return dataPromise;
}
