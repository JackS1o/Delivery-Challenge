const productModel = require("../models/productsModel");

const productExists = async (req, res, next) => {
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
    return res
      .status(404)
      .json({ message: "Product not found", inexistentProduct });
  }
  next();
};

const invalidQuantity = async (req, res, next) => {
  const { order } = req.body;
  let invalidQuantity = 0;
  await Promise.all(
    order.map(async (item) => {
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
  productExists,
  invalidQuantity,
};
