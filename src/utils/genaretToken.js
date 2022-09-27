const JWT = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (payload) =>
  new Promise((resolve, reject) => {
    JWT.sign(payload, process.env.SECRET_KEY, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });

module.exports = generateToken;
