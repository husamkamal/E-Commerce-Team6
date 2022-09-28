const loginController = require('./login');
const signingController = require('./signin');
const { getProductsNames, getFIlterProduct } = require('./products');

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
  getFIlterProduct,
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
  deleteOrders,
};
