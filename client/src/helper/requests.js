import axios from 'axios';

export default function getProductsNames() {
  const promise = axios.get('/api/v1/names');
  const dataPromise = promise.then((response) => response.data);
  return dataPromise;
}
