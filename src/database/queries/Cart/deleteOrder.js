const connection = require('../../config/connection');

const deleteOrder = ({ ID }) => {
  const command = { text: 'DELETE FROM cart WHERE ID = $1', values: [ID] };
  return connection.query(command);
};

module.exports = deleteOrder;
