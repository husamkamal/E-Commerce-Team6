const connection = require('../../config/connection');

const getAllOrders = ({ userid }) => {
  const command = {
    text: `
SELECT 
  c.ID AS "OrderID", 
  Image AS "ProductImage", 
  p.Price AS "ProductPrice", 
  c.Quantity AS "ProductQuantity" ,
  p.Name AS "ProductName"
FROM cart c 
JOIN users u ON u.ID = c.userID
JOIN products p ON c.ProductID = p.ID 
WHERE c.userID = $1;`,
    values: [userid],
  };
  return connection.query(command);
};

module.exports = getAllOrders;
