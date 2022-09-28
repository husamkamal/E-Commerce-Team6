const categoryController = require('./category');
const loginController = require('./login');
const signingController = require('./signin');
const { getProductsNames, getProductById } = require('./products');

module.exports = {
  signingController,
  loginController,
  getProductsNames,
  getProductById,
  categoryController,
};
