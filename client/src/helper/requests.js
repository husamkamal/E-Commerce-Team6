import axios from 'axios';

export default function getProductsNames() {
  const promise = axios.get('/names');
  const dataPromise = promise.then((response) => response.data);
  return dataPromise;
}
