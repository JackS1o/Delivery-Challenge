const ordersService = require('../services/ordersService');

const createOrder = async (req, res) => {
  const { body } = req;

  const order = await ordersService.createOrder(body);

  if (order.length) return res.status(400).json({ message: 'Product doesnt exist', order });
  
  return res.status(201).json({ message: 'Sale created successfully!' });
}

module.exports = {
  createOrder,
};
