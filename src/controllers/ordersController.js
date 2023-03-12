const ordersService = require('../services/ordersService');

const createOrder = async (req, res) => {
  const { body } = req;
  const { auth } = req;

  await ordersService.createOrder(body, auth);
  
  return res.status(201).json({ message: 'Sale created successfully!' });
}

const getUserOrders = async (req, res) => {
  const { auth } = req;
  const orders = await ordersService.getUserOrders(auth);

  return res.status(200).json(orders);
}

module.exports = {
  createOrder,
  getUserOrders,
};
