const { Router } = require("express");

const orderController = require("../controllers/ordersController");

const {
  authToken,
  productExists,
  invalidQuantityMVP,
  validateOrderFields,
  invalidUpdatedQuantityMVP,
  invalidUpdatedFields,
} = require("../middleware");

const mvpRouter = Router();

mvpRouter.post(
  "/mvp/order",
  authToken,
  productExists,
  invalidQuantityMVP,
  validateOrderFields,
  orderController.createOrder
);

mvpRouter.patch(
  "/mvp/user/order/:id",
  authToken,
  invalidUpdatedQuantityMVP,
  invalidUpdatedFields,
  orderController.updateOrder
);

module.exports = mvpRouter;
