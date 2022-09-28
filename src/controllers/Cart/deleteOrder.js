const { deleteOrder } = require('../../database/queries');
const ApiResult = require('../../utils/apiResult');

const deleteOrderHandler = (req, res, next) => {
  const result = new ApiResult();
  const { id } = req.params;
  try {
    deleteOrder({ ID: id })
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

module.exports = deleteOrderHandler;
