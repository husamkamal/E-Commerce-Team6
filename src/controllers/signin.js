const bcryptjs = require('bcryptjs');
const { signingQuery } = require('../database/queries');
const signingValidation = require('../utils/signin');

const signingController = (req, res) => {
  const { body } = req;
  const { name, email, password } = req.body;
  signingValidation(body)
    .then((data) => {
      if (!data.details) {
        return bcryptjs.hash(password, 10);
      }
      throw data.details[0].message;
    })
    .then((result) => signingQuery({ name, email, password: result }))
    .then(() => res.status(201).json('signing successfully '))
    .catch((err) => {
      if (err.detail) {
        res.status(400).json(err.detail);
      }
      res.status(403).json(err);
    });
};

module.exports = signingController;
