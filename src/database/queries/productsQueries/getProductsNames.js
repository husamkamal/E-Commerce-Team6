const connection = require('../../config/connection');

const getProductsNamesQuery = () => {
  const sql = {
    text: 'SELECT ID, Name FROM products',
    values: [],
  };
  return connection.query(sql).then((res) => res.rows);
};

module.exports = getProductsNamesQuery;
