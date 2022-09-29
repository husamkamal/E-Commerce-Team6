const router = require('express').Router();
const { getProductsNames, logoutController } = require('../controllers');

const {
  signingController,
  loginController,
  getFIlterProduct,
  getProductById,
  categoryController,
} = require('../controllers');
const cartRouter = require('./cart');

router.get('/names', getProductsNames);

router.get('/products', getFIlterProduct);
router.get('/logout', logoutController);
router.post('/register', signingController);
router.post('/login', loginController);
router.get('/product/:productId', getProductById);
router.get('/category', categoryController);

router.use('/cart', cartRouter);

// server error need handling
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json(err);
});
module.exports = router;
