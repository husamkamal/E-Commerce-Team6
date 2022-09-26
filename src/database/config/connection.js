const { Pool } = require('pg');
const { database } = require('../../configurations/environment');

module.exports = new Pool(database);
