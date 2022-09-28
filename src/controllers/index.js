const loginController = require('./login');
const signingController = require('./signin');
const { getProductsNames } = require('./products');
const {
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
} = require('./Cart');
module.exports = {
  signingController,
  loginController,
  getProductsNames,
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
};
