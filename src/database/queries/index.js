const loginQueries = require('./login');
const signingQuery = require('./signin');

const {
  getProductsNamesQuery,
  getProductsQuery,
} = require('./productsQueries');

const productByIdQuery = require('./getProductById');
const categoryQuery = require('./category');

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
  productByIdQuery,
  categoryQuery,
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
  deleteOrders,
};
