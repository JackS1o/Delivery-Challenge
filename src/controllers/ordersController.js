const ordersService = require('../services/ordersService');

const createOrder = async (req, res) => {
  const { body } = req;
  const { auth } = req;

  await ordersService.createOrder(body, auth);
  
  return res.status(201).json({ message: 'Sale created successfully!' });
}

module.exports = {
  createOrder,
};
