const { insertOrder } = require('../../database/queries');
const ApiResult = require('../../utils/apiResult');

const insertOrderHandler = (req, res, next) => {
  const result = new ApiResult();
  const { productID, quantity } = req.body;
  // TODO:GET USER ID FROM REQUEST;
  try {
    insertOrder({ userid: 1, quantity, productID })
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

module.exports = insertOrderHandler;
