const { Router } = require("express");
const { authToken } = require("../middleware/tokenValidation");

const userController = require("../controllers/userController");
const productController = require("../controllers/productController");

const router = Router();

router.post("/register", userController.createUser);
router.post("/login", authToken, userController.login);
router.get("/products", productController.getAllProducts);
router.post("/products", productController.createProduct);

module.exports = router;
