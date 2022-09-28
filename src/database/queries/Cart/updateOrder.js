const connection = require('../../config/connection');

const updateOrder = ({ quantity, orderid }) => {
  const command = {
    text: 'UPDATE cart SET quantity = $1 WHERE ID = $2 RETURNING *',
    values: [quantity, orderid],
  };
  return connection.query(command);
};

module.exports = updateOrder;
