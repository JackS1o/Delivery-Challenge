const orderModel = require("../models/ordersModel");

const createOrder = async (body, auth) => {
  const order = await Promise.all(body.map((item) => {
    const { name, quantity, description, price } = item;
    return orderModel.create({
      user: auth,
      name,
      quantity,
      description,
      price,
    });
  }));
  return order;
};

module.exports = {
  createOrder,
};
