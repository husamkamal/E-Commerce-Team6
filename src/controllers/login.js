const bcryptjs = require('bcryptjs');
const { loginQueries } = require('../database/queries');
const generateToken = require('../utils/genaretToken');
const loginValidation = require('../utils/login');

const loginController = (req, res) => {
  const { email, password } = req.body;
  let payload;
  loginValidation
    .validateAsync({ email, password })
    .then(() => loginQueries(email))
    .then((result) => {
      if (result.rowCount) {
        [payload] = result.rows;
        return result.rows[0];
      }
      // eslint-disable-next-line no-throw-literal
      throw 'you dont have account';
    })
    .then((dataResult) => bcryptjs.compare(password, dataResult.hshedpassword))
    .then((re) => {
      if (re) {
        return generateToken({ email: payload.email, id: payload.id });
      }
      // eslint-disable-next-line no-throw-literal
      throw { msgErr: 'password not match' };
    })
    .then((token) => res.cookie('token', token).json(token))
    .catch((err) => {
      if (err.msgErr) {
        res.status(401).json(err.msgErr);
      } else {
        res.status(403).json(err);
      }
    });
};
module.exports = loginController;
