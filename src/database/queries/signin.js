const connection = require('../config/connection');

const signingQuery = () => connection.query('SELECT * FROM users ');

module.exports = signingQuery;
