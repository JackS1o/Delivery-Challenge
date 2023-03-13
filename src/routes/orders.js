const { Router } = require("express");

const orderController = require("../controllers/ordersController");

const {
  authToken,
} = require("../middleware");

const orderRouter = Router();

orderRouter.get("/user/orders", authToken, orderController.getUserOrders);

orderRouter.get("/user/order/:id", authToken, orderController.getUserOrdersById);

orderRouter.delete("/user/order/:id", authToken, orderController.deleteOrder);

module.exports = orderRouter;
