const connection = require('../config/connection');

const signingQuery = ({ name, email, password }) =>
  connection.query(
    'INSERT INTO users(Name,Email,HshedPassword) VALUES ($1,$2,$3) RETURNING * ',
    [name, email, password]
  );

module.exports = signingQuery;
