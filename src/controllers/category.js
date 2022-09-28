const { categoryQuery } = require('../database/queries');

const categoryController = (req, res) => {
  categoryQuery()
    .then((data) => {
      res.status(200).json(data.rows);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
module.exports = categoryController;
