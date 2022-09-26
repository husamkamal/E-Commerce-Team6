const bcryptjs = require('bcryptjs');
const { signingQuery } = require('../database/queries');
const signinValidation = require('../utils/signin');

const signinController = (req, res) => {
  const { body } = req;
  const { name, email, password } = req.body;
  signinValidation(body)
    .then((data) => {
      if (!data.details) {
        bcryptjs.hash(password, 10, (err, hash) => {
          if (err) {
            res.status(500).json(err);
          } else {
            signingQuery({ name, email, password: hash }).then(() =>
              res.status(201).json('sign in successfully')
            );
          }
        });
      } else {
        throw data.details[0].message;
      }
    })
    .catch((err) => {
      res.status(403).json(err);
    });
};

module.exports = signinController;
