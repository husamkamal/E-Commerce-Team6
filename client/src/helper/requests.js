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

export const getProducts = async (filterProduct, controller) => {
  const { category, search, price } = filterProduct;
  const result = category.filter((ele) => ele.selected === true);
  const ids = [];
  result.forEach((ele) => {
    ids.push(ele.id);
  });
  const url = `/api/v1/products?category=${ids.join('-')}&price=${
    price || 100
  }&search=${search || ''}`;

  try {
    const promise = await axios.get(url, {
      signal: controller.signal,
    });
    return promise.data;
  } catch (error) {
    return error;
  }
};

export function getMainProduct() {
  const promise = axios.get('/api/v1/products?category=&price=100&search=');
  const dataPromise = promise.then((response) => response.data);
  return dataPromise;
}
