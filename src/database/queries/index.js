const loginQueries = require('./login');
const signingQuery = require('./signin');
const { getProductsNamesQuery } = require('./productsQueries');
const {
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
  deleteOrders,
} = require('./Cart');

module.exports = {
  signingQuery,
  getProductsNamesQuery,
  loginQueries,
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
  deleteOrders,
};
