/* eslint-disable no-nested-ternary */
const connection = require('../../config/connection');

const getProductsQuery = ({ cate, search, price }) => {
  const categoryCondition = cate.length
    ? `CategoryID in (${cate.map((x, i) => `$${i + 1}`)})`
    : '';

  const priceCondition = price ? `Price <= $${cate.length + 1}` : ''; // max price

  const searchCondition = search
    ? `LOWER(Name) LIKE '%' || $${
        cate.length + (priceCondition ? 2 : 1)
      } || '%'`
    : '';

  const conditions = [categoryCondition, priceCondition, searchCondition]
    .filter(Boolean)
    .reduce((acc, v, i) => {
      if (i === 0) {
        // first item add where statement
        return `where ${v}`;
      }
      return `${acc} and ${v}`;
    }, '');

  const getProductsQueryText = `SELECT * FROM products ${conditions}`;

  const finalQuery = {
    text: getProductsQueryText,
    values: [...cate, price, search].filter(Boolean),
  };

  // const cases = [
  //   cate === 'all' && search === '' && price === -1,
  //   cate === 'all' && search !== '' && price === -1,
  //   cate === 'all' && search !== '' && price !== -1,
  //   cate !== 'all' && search === '' && price === -1,
  //   cate !== 'all' && search !== '' && price === -1,
  //   cate !== 'all' && search !== '' && price !== -1,
  // ];

  // const sql = {
  //   text: cases[0]
  //     ? 'SELECT * FROM products '
  //     : cases[1]
  //     ? "SELECT * FROM products WHERE LOWER(Name) LIKE '%' || $1 || '%'"
  //     : cases[2]
  //     ? "SELECT * FROM products WHERE LOWER(Name) LIKE '%' || $1 || '%' AND Price<= $2"
  //     : cases[3]
  //     ? `SELECT * FROM products WHERE CategoryID in ($1)`
  //     : cases[4]
  //     ? `SELECT * FROM products WHERE CategoryID = ANY ('{ $1 }') AND  LOWER(Name) LIKE '%' || $2 || '%'`
  //     : `SELECT * FROM products WHERE CategoryID = ANY ('{ $1 }') AND  LOWER(Name) LIKE '%' || $2 || '%' AND Price<= $3`,
  //   values: cases[0]
  //     ? []
  //     : cases[1]
  //     ? [search]
  //     : cases[2]
  //     ? [search, +price]
  //     : cases[3]
  //     ? [cate]
  //     : cases[4]
  //     ? [cate, search]
  //     : [cate, search, +price],
  // };
  return connection.query(finalQuery).then((res) => res.rows);
};

module.exports = getProductsQuery;
