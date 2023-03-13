const productModel = require("../models/productsModel");

const getAllProducts = async () => {
  const products = await productModel.find();
  return products;
};

module.exports = {
  getAllProducts,
};
