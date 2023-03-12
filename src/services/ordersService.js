const orderModel = require("../models/ordersModel");

const createOrder = async (body, auth) => {
  const { paymentMethod, address, order } = body;
  const orders = await Promise.all(order.map((item) => {
    const { name, quantity, description, price } = item;
    const orderList = {
      name,
      quantity,
      description,
      price,
    }
    return orderList;
  }));
  const newOrder = await orderModel.create({
    user: auth,
    paymentMethod,
    address,
    order: orders,
  });
  return newOrder;
};

const getUserOrders = async (auth) => {
  const orders = await orderModel.find({ user: auth });
  return orders;
}

const updateOrder = async (id, body) => {
  const updatedorder = await orderModel.updateOne({ _id: id }, body);
  return updatedorder;
}

module.exports = {
  createOrder,
  getUserOrders,
  updateOrder,
};
