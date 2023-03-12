const ordersService = require("../services/ordersService");

const createOrder = async (req, res) => {
  const { body } = req;
  const { auth } = req;

  await ordersService.createOrder(body, auth);

  return res.status(201).json({ message: "Sale created successfully!" });
};

const getUserOrders = async (req, res) => {
  const { auth } = req;
  const orders = await ordersService.getUserOrders(auth);

  return res.status(200).json(orders);
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const order = await ordersService.updateOrder(id, body);
  return res.status(200).json({ message: "Sale updated successfully!", order });
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;

  const order = await ordersService.deleteOrder(id);
  if (!order) return res.status(404).json({ message: "Order not found" });

  return res.status(200).json({ message: "Sale deleted successfully!", order });
}

module.exports = {
  createOrder,
  getUserOrders,
  updateOrder,
  deleteOrder,
};
