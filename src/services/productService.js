const productModel = require("../models/productsModel");

const getAllProducts = async () => {
  const products = await productModel.find();
  return products;
};

const createProduct = async (body) => {
  const product = await productModel.create(body);
  return product;
};

module.exports = {
  getAllProducts,
  createProduct,
};
