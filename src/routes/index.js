const { Router } = require("express");
const { authToken } = require("../middleware/tokenValidation");

const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const {
  validateLogin,
  validateProductsFields,
} = require("../middleware/validateFields");
const orderController = require("../controllers/ordersController");

const router = Router();

router.post("/register", validateLogin, userController.createUser);
router.post("/login", validateLogin, userController.login);
router.get("/products", authToken, productController.getAllProducts);
router.post(
  "/order",
  authToken,
  orderController.createOrder
);

module.exports = router;
