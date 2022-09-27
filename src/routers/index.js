const router = require('express').Router();
const { getProductsNames } = require('../controllers');

router.get('/names', getProductsNames);

// server error need handling
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json(err);
});
module.exports = router;
