const productModel = require("../models/productsModel");

const productExists = async (req, _res, next) => {
  const { order } = req.body;
  let inexistentProduct = [];
  await Promise.all(
    order.map(async (item) => {
      const { name } = item;
      const existOrder = await productModel.findOne({ name });
      if (!existOrder) {
        inexistentProduct.push(item);
      }
    })
  );
  if (inexistentProduct.length) {
    throw new Error(
      `404|The following products do not exist: ${
        inexistentProduct && inexistentProduct.map((item) => item.name)
      }`
    );
  }
  next();
};

const invalidQuantity = async (order) => {
  let quantity = 0;
  await Promise.all(
    order.map(async (item) => {
      quantity += item.quantity;
    })
  );
  return quantity;
};

const invalidQuantityMVP = async (req, _res, next) => {
  const { order } = req.body;
  const result = await invalidQuantity(order);
  if (result > 5) {
    throw new Error(
      "400|You can only update the quantity to a maximum of 5"
    );
  }
  next();
}

const invalidQuantityEarlyAdop = async (req, _res, next) => {
  const { order } = req.body;
  const result = await invalidQuantity(order);
  if (result > 15) {
    throw new Error(
      "400|You can only update the quantity to a maximum of 15"
    );
  }
  next();
}

const invalidQuantityEarlyMajor = async (req, _res, next) => {
  const { order } = req.body;
  const result = await invalidQuantity(order);
  if (result > 20) {
    throw new Error(
      "400|You can only update the quantity to a maximum of 20"
    );
  }
  next();
}

module.exports = {
  productExists,
  invalidQuantityMVP,
  invalidQuantityEarlyAdop,
  invalidQuantityEarlyMajor,
};
