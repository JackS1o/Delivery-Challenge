const orderModel = require("../models/ordersModel");
const productModel = require("../models/productsModel");

const createOrder = async (body) => {
  let inexistentProduct = [];
  await Promise.all(body.map(async (item) => {
    const { name } = item;
    const order = await productModel.findOne({ name });
    if (!order) {
      inexistentProduct.push(item);
    }
  }));
  if (!inexistentProduct.length) {
    await orderModel.create(body);
  }
  return inexistentProduct;
};

module.exports = {
  createOrder,
};
