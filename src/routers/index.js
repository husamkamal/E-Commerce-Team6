const router = require('express').Router();
const { getProductsNames } = require('../controllers');
const cartRouter = require('./cart');

router.get('/name', getProductsNames);

const { signingController, loginController } = require('../controllers');

router.post('/register', signingController);
router.post('/login', loginController);

router.use('/cart', cartRouter);

// server error need handling
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json(err);
});
module.exports = router;
