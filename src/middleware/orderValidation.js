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

const invalidQuantity = async (req, _res, next) => {
  const { order } = req.body;
  let invalidQuantity = 0;
  await Promise.all(
    order.map(async (item) => {
      invalidQuantity += item.quantity;
    })
  );
  if (invalidQuantity > 5) {
    throw new Error(`400|Maxmimum allowed items per order is five.`);
  }
  next();
};

module.exports = {
  productExists,
  invalidQuantity,
};
