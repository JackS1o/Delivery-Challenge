const { Router } = require("express");
const userController = require("../controllers/userController");
const { authToken } = require("../middleware/tokenValidation");

const router = Router();

router.post("/register", userController.createUser);
router.post("/login", authToken, userController.login);

module.exports = router;
