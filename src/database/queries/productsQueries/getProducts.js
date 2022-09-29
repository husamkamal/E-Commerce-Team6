/* eslint-disable no-nested-ternary */
const connection = require('../../config/connection');

const getProductsQuery = ({
  cate = 'all',
  search = '',
  price = -1,
  page = 1,
}) => {
  const sql = {
    text:
      cate === 'all' && search === '' && price === -1
        ? 'SELECT * FROM products '
        : cate === 'all' && search !== '' && price === -1
        ? "SELECT * FROM products WHERE LOWER(Name) LIKE '%' || $2 || '%'"
        : cate === 'all' && search !== '' && price !== -1
        ? "SELECT * FROM products WHERE LOWER(Name) LIKE '%' || $2 || '%' AND Price<= $3"
        : cate !== 'all' && search === '' && price === -1
        ? `SELECT * FROM products WHERE categoryid = ANY ('{$1}')`
        : cate !== 'all' && search !== '' && price === -1
        ? `SELECT * FROM products WHERE categoryid = ANY ('{ $1 }') AND  LOWER(Name) LIKE '%' || $2 || '%'`
        : `SELECT * FROM products WHERE categoryid = ANY ('{ $1 }') AND  LOWER(Name) LIKE '%' || $2 || '%' AND Price<= $3`,
    // cate !== 'all' && search !== '' && price !==-1 ? `SELECT * FROM products WHERE categoryid = ANY ('{$1}') AND  LOWER(Name) LIKE '%' || $2 || '%' AND Price<= $3`
    values: [cate, search, +price, +page],
  };
  return connection.query(sql).then((res) => res.rows);
};

module.exports = getProductsQuery;
