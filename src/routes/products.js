const { Router } = require("express");

const productController = require("../controllers/productController");

const { authToken } = require("../middleware");

const productsRouter = Router();

productsRouter.get("/products", authToken, productController.getAllProducts);

module.exports = productsRouter;
