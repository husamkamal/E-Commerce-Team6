const path = require('path');
const fs = require('fs');
const connection = require('./connection');

const build = () => {
  const filePath = path.join(__dirname, 'build.sql');
  const buildDB = fs.readFileSync(filePath, 'utf-8');
  return connection.query(buildDB);
};
module.exports = build;
