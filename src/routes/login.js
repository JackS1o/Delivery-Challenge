const { Router } = require("express");

const userController = require("../controllers/userController");

const {
  validateLogin,
} = require("../middleware");

const loginRouter = Router();

loginRouter.post("/register", validateLogin, userController.createUser);

loginRouter.post("/login", validateLogin, userController.login);

module.exports = loginRouter;
