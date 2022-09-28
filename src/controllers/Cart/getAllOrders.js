const { getAllOrders } = require('../../database/queries');
const ApiResult = require('../../utils/apiResult');

const getAllOrdersHandler = (req, res, next) => {
  const result = new ApiResult();
  // TODO:GET USER ID FROM REQUEST;
  try {
    getAllOrders({ userid: 1 })
      .then((data) => {
        result.Status = true;
        result.Data = data.rows;
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

module.exports = getAllOrdersHandler;
