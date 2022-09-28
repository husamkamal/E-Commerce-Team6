const loginQueries = require('./login');
const signingQuery = require('./signin');
const {
  getProductsNamesQuery,
  getProductsQuery,
} = require('./productsQueries');
const {
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
  deleteOrders,
} = require('./Cart');

module.exports = {
  signingQuery,
  loginQueries,
  getProductsNamesQuery,
  getProductsQuery,
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
  deleteOrders,
};
