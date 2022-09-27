const connection = require('../../config/connection');

const getProductsNamesQuery = () => {
  const sql = {
    text: 'SELECT Name FROM products',
    values: [],
  };
  return connection.query(sql).then((res) => res.rows);
};

module.exports = getProductsNamesQuery;
