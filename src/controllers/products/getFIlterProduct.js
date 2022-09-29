const createError = require('http-errors');
const { getProductsQuery } = require('../../database/queries/productsQueries');

const getFIlterProduct = (req, res, next) => {
  const { page = 1, category = '', search = '', price = -1 } = req.query;
  const cate = category?.split('-').filter(Boolean);
  getProductsQuery({ cate, search, price, page })
    .then((rows) => {
      console.log(rows);
      if (rows.length) {
        res.json(rows);
      } else {
        res.status(200).json({ msg: 'There is no products' });
      }
    })
    .catch((err) => {
      next(createError(500, `server error in getting products ${err}`));
    });
};

module.exports = getFIlterProduct;
