const router = require('express').Router();
const { getProductsNames } = require('../controllers');

router.get('/name', getProductsNames);

const { signingController, loginController } = require('../controllers');

router.post('/register', signingController);
router.post('/login', loginController);

// server error need handling
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(500).json(err);
});
module.exports = router;
