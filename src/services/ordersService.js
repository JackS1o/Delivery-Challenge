const orderModel = require("../models/ordersModel");

const createOrder = async (body, auth) => {
  const { paymentMethod, address, order } = body;
  const newOrder = await orderModel.create({
    user: auth,
    paymentMethod,
    address,
    order,
  });
  return newOrder;
};

const getUserOrders = async (auth) => {
  const orders = await orderModel.find({ user: auth });
  return orders;
}

const getUserOrdersById = async (id) => {
  const order = await orderModel.findOne({ _id: id });
  if (!order) throw new Error("404|Order not found");
  return order;
}

const updateOrder = async (id, body) => {
  const updatedorder = await orderModel.updateOne({ _id: id }, body);
  return updatedorder;
}

const deleteOrder = async (id) => {
  const order = await getUserOrdersById(id);
  if (!order) throw new Error("404|Order not found");
  await orderModel.deleteOne({ _id: id });
  return order;
}

module.exports = {
  createOrder,
  getUserOrders,
  getUserOrdersById,
  updateOrder,
  deleteOrder,
};
