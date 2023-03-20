const { Router } = require("express");

const orderController = require("../controllers/ordersController");

const {
  authToken,
} = require("../middleware");

const orderRouter = Router();

orderRouter.get("/orders", authToken, orderController.getUserOrders);

orderRouter.get("/order/:id", authToken, orderController.getUserOrdersById);

orderRouter.get("/user/orders", authToken, orderController.getUserOrders);

orderRouter.delete("/order/:id", authToken, orderController.deleteOrder);

module.exports = orderRouter;
