const { Router } = require("express");

const orderController = require("../controllers/ordersController");

const {
  authToken,
  productExists,
  invalidQuantity,
  validateOrderFields,
  invalidUpdatedQuantity,
  invalidUpdatedFields,
} = require("../middleware");

const mvpRouter = Router();

mvpRouter.post(
  "/mvp/order",
  authToken,
  productExists,
  invalidQuantity,
  validateOrderFields,
  orderController.createOrder
);

mvpRouter.patch(
  "/mvp/user/order/:id",
  authToken,
  invalidUpdatedQuantity,
  invalidUpdatedFields,
  orderController.updateOrder
);

module.exports = mvpRouter;
