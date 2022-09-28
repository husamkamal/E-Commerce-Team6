const connection = require('../../config/connection');

const getProductsQuery = () => {
  const sql = {
    text: 'SELECT * FROM products ',
    values: [],
  };
  return connection.query(sql).then((res) => res.rows);
};

module.exports = getProductsQuery;
