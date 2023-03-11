const productModel = require("../models/productsModel");

const orderExists = async (req, res, next) => {
  const { body } = req;
  let inexistentProduct = [];
  await Promise.all(
    body.map(async (item) => {
      const { name } = item;
      const order = await productModel.findOne({ name });
      if (!order) {
        inexistentProduct.push(item);
      }
    })
  );
  if (inexistentProduct.length) {
    return res
      .status(404)
      .json({ message: "Product not found", inexistentProduct });
  }
  next();
};

const invalidQuantity = async (req, res, next) => {
  const { body } = req;
  let invalidQuantity = 0;
  await Promise.all(
    body.map(async (item) => {
      invalidQuantity += item.quantity;
    })
  );
  if (invalidQuantity > 5) {
    return res
      .status(400)
      .json({ message: "Maxmimum allowed items per order is five" });
  }
  next();
};

module.exports = {
  orderExists,
  invalidQuantity,
};
