const loginQueries = require('./login');
const signingQuery = require('./signin');
const {
  getProductsNamesQuery,
  getProductsQuery,
} = require('./productsQueries');

module.exports = {
  signingQuery,
  loginQueries,
  getProductsNamesQuery,
  getProductsQuery,
};
