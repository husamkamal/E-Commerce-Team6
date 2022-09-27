const loginController = require('./login');
const signingController = require('./signin');
const { getProductsNames } = require('./products');

module.exports = { signingController, loginController, getProductsNames };
