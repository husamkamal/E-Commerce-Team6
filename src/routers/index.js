const router = require('express').Router();
const { signingController, loginController } = require('../controllers');

// const verifyToken = require('../middlewares/verifyToken');
router.post('/register', signingController);
router.post('/login', loginController);
module.exports = router;
