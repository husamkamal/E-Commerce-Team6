const router = require('express').Router();
const {
  getAllOrders,
  insertOrder,
  updateOrder,
  deleteOrder,
  deleteOrders,
} = require('../controllers');

router.get('/', getAllOrders);
router.post('/new', insertOrder);
router.post('/edit', updateOrder);
router.delete('/delete/:id', deleteOrder);
router.delete('/delete', deleteOrders);

module.exports = router;
