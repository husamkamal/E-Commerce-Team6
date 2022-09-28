const router = require('express').Router();
const { getProductsNames } = require('../controllers');
const {
  signingController,
  loginController,
  getFIlterProduct,
} = require('../controllers');

router.get('/names', getProductsNames);

router.get('/products', getFIlterProduct);

router.post('/register', signingController);
router.post('/login', loginController);

// server error need handling
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json(err);
});
module.exports = router;
