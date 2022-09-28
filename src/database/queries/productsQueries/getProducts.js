const connection = require('../../config/connection');

const getProductsQuery = ({ cate = 'all', search = '', page = 1 }) => {
  const sql = {
    text: 'SELECT * FROM products when cate == "all" then *   ',
    values: [],
  };
  return connection.query(sql).then((res) => res.rows);
};

module.exports = getProductsQuery;
