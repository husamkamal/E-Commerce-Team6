const getAllOrders = require('./getAllOrders');
const insertOrder = require('./insertOrder');
const updateOrder = require('./updateOrder');
const deleteOrder = require('./deleteOrder');
const deleteOrders = require('./deleteAllOrders');

module.exports = {
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
  deleteOrders,
};
