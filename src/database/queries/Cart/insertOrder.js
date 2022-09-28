const connection = require('../../config/connection');

const insertOrder = ({ userid, productID, quantity }) => {
  const command = {
    text: 'INSERT INTO cart (userid, productid, quantity) VALUES ($1, $2, $3) RETURNING *',
    values: [userid, productID, quantity],
  };
  return connection.query(command);
};

module.exports = insertOrder;
