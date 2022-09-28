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
  const { category, search, page, price } = filterProduct;
  const result = category.filter((ele) => ele.selected === true);
  const ids = [];
  result.forEach((ele) => {
    ids.push(ele.id);
  });

  const url = `/api/v1/products`;

  try {
    const promise = await axios.get(url, {
      signal: controller.signal,
      params: {
        category: ids.length ? ids?.join('-') : undefined,
        ...(search ? { search } : {}),
        ...(page !== -1 ? { page } : {}),
        ...(price !== -1 ? { price } : {}),
      },
    });
    return promise.data;
  } catch (error) {
    return error;
  }
  // const promise = axios.get(url, { signal: controller.signal });
  // const dataPromise = promise.then((response) => response.data);
  // return dataPromise;
};
