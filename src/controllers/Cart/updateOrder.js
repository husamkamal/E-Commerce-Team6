const { updateOrder } = require('../../database/queries');
const ApiResult = require('../../utils/apiResult');

const updateOrderHandler = (req, res, next) => {
  const result = new ApiResult();
  const { orderid, quantity } = req.body;
  if (quantity < 1) {
    result.Errors.push('Quantity Must Be More Than 0');
    res.status(400).json(result);
  }
  try {
    updateOrder({ quantity, orderid })
      .then((data) => {
        if (!data.rowCount) {
          result.Errors.push('Invalid Paramerters');
        } else {
          result.Status = true;
          result.Data = data.rows;
        }
        res.status(200).json(result);
      })
      .catch((err) => {
        result.Errors.push(err.detail);
        res.status(400).json(result);
      });
  } catch (err) {
    next(err);
  }
};

module.exports = updateOrderHandler;
