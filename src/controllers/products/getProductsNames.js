const createError = require('http-errors');

// const { getPostsQuery } = require('../../database/queries');
const { getProductsNamesQuery } = require('../../database/queries');

const getProductsNames = (req, res, next) => {
  console.log('in get controllert');
  getProductsNamesQuery()
    .then((rows) => {
      if (rows.length) {
        res.json({ names: rows });
      } else {
        res.status(300).json({ msg: 'There is no products' });
      }
    })
    .catch((err) => {
      next(createError(500, `server error in getting names ${err}`));
    });
};

module.exports = getProductsNames;
