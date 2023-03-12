const { Router } = require("express");

const {
  validateLogin,
  productExists,
  invalidQuantity,
  authToken,
} = require("../middleware");

const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const orderController = require("../controllers/ordersController");

const router = Router();

router.post("/register", validateLogin, userController.createUser);
router.post("/login", validateLogin, userController.login);
router.get("/products", authToken, productController.getAllProducts);
router.get("/user/orders", authToken, orderController.getUserOrders);
router.post(
  "/mvp/order",
  authToken,
  productExists,
  invalidQuantity,
  orderController.createOrder
);

module.exports = router;
