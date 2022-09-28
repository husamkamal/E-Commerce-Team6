const createError = require('http-errors');
const { getProductsQuery } = require('../../database/queries/productsQueries');

const getFIlterProduct = (req, res, next) => {
  const { page, category, search } = req.query;
  const cate = category.split('-');

  getProductsQuery({ cate, search, page })
    .then((rows) => {
      console.log(rows);
      if (rows.length) {
        res.json({ names: rows });
      } else {
        res.status(300).json({ msg: 'There is no products' });
      }
    })
    .catch((err) => {
      next(createError(500, `server error in getting products ${err}`));
    });
};

module.exports = getFIlterProduct;
