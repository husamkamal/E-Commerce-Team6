const { productByIdQuery } = require('../../database/queries');

const getProductById = (req, res) => {
  const { productId } = req.params;
  productByIdQuery(productId)
    .then((data) => {
      res.status(200).json(data.rows[0]);
    })
    .catch(() => {
      res.status(500).json(`${productId}theres no product`);
    });
};
module.exports = getProductById;
