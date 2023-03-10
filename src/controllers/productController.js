const productService = require('../services/productService');

const getAllProducts = async (_req, res) => {
  const products = await productService.getAllProducts();

  return res.status(200).json(products);
}

const createProduct = async (req, res) => {
  const { body } = req;

  const product = await productService.createProduct(body);

  if (!product) return res.status(400).json({ message: 'Invalid entries. Try again.' });

  return res.status(201).json(product);
}

module.exports = {
  getAllProducts,
  createProduct,
};
