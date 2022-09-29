const createError = require('http-errors');
const { getProductsQuery } = require('../../database/queries/productsQueries');

const getFIlterProduct = (req, res, next) => {
  const filterQueries = req.query;
  const isValid = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key in filterQueries) {
    if (filterQueries[key] !== undefined) {
      isValid[key] = filterQueries[key];
    }
  }
  if (isValid.category) {
    isValid.category = isValid.category.split('-');
  }
  getProductsQuery(isValid)
    .then((rows) => {
      if (rows.length) {
        res.json(rows);
      } else {
        res.status(300).json({ msg: 'There is no products' });
      }
    })
    .catch((err) => {
      next(createError(500, `server error in getting products ${err}`));
    });
};

module.exports = getFIlterProduct;
