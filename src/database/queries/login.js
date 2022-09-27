const connection = require('../config/connection');

const loginQueries = (email) =>
  connection.query('SELECT * FROM users WHERE email = $1', [email]);

module.exports = loginQueries;
