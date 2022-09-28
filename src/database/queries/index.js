const loginQueries = require('./login');
const signingQuery = require('./signin');
const { getProductsNamesQuery } = require('./productsQueries');

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
  getProductsNamesQuery,
  loginQueries,
  productByIdQuery,
  categoryQuery,
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
  deleteOrders,

};
