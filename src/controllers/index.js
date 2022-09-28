const loginController = require('./login');
const signingController = require('./signin');
const { getProductsNames, getFIlterProduct } = require('./products');

module.exports = {
  signingController,
  loginController,
  getProductsNames,
  getFIlterProduct,
};
