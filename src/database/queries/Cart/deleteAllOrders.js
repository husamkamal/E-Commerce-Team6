const connection = require('../../config/connection');

const deleteOrders = ({ userID }) => {
  const command = {
    text: 'DELETE FROM cart WHERE userID = $1',
    values: [userID],
  };
  return connection.query(command);
};

module.exports = deleteOrders;
