const categoryController = require('./category');
const loginController = require('./login');
const signingController = require('./signin');

const { getProductsNames, getProductById } = require('./products');

const {
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
  deleteOrders,
} = require('./Cart');

module.exports = {
  signingController,
  loginController,
  getProductsNames,
  getProductById,
  categoryController,
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
  deleteOrders,

};
