const connection = require('../config/connection');

const categoryQuery = () => connection.query('SELECT * FROM categories');

module.exports = categoryQuery;
