const loginQueries = require('./login');
const signingQuery = require('./signin');
const { getProductsNamesQuery } = require('./productsQueries');
const productByIdQuery = require('./getProductById');
const categoryQuery = require('./category');

module.exports = {
  signingQuery,
  getProductsNamesQuery,
  loginQueries,
  productByIdQuery,
  categoryQuery,
};
