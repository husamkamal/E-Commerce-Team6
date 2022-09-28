const connection = require('../config/connection');

const productByIdQuery = (productId) =>
  connection.query('SELECT * FROM products WHERE id = $1', [productId]);

module.exports = productByIdQuery;
