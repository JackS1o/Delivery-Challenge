const { Router } = require("express");

const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const orderController = require("../controllers/ordersController");

const {
  validateLogin,
  productExists,
  invalidQuantity,
  authToken,
  validateOrderFields,
  invalidUpdatedQuantity,
  invalidUpdatedFields,
} = require("../middleware");

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
  validateOrderFields,
  orderController.createOrder
);

router.patch(
  "mvp/user/orders/:id",
  authToken,
  invalidUpdatedQuantity,
  invalidUpdatedFields,
  orderController.updateOrder
);

router.delete("/user/orders/:id", authToken, orderController.deleteOrder);

module.exports = router;
