const loginQueries = require('./login');
const signingQuery = require('./signin');
const { getProductsNamesQuery } = require('./productsQueries');

module.exports = {
  signingQuery,
  getProductsNamesQuery,
  loginQueries,
};
