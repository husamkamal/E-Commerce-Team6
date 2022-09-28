const router = require('express').Router();
const { getProductsNames } = require('../controllers');
const {
  signingController,
  loginController,
  getProductById,
  categoryController,
} = require('../controllers');

router.get('/names', getProductsNames);
router.post('/register', signingController);
router.post('/login', loginController);
router.get('/product/:productId', getProductById);
router.get('/category', categoryController);

// server error need handling
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json(err);
});
module.exports = router;
