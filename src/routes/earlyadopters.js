const { Router } = require("express");

const orderController = require("../controllers/ordersController");

const {
  authToken,
  productExists,
  invalidQuantityEarlyAdop,
  validateOrderFields,
  invalidUpdatedFields,
  invalidUpdatedQuantityEarlyAdop,
} = require("../middleware");

const earlyAdoptersRouter = Router();

earlyAdoptersRouter.post(
  "/earlyadopters/order",
  authToken,
  productExists,
  invalidQuantityEarlyAdop,
  validateOrderFields,
  orderController.createOrder
);

earlyAdoptersRouter.patch(
  "/earlyadopters/user/order/:id",
  authToken,
  invalidUpdatedFields,
  invalidUpdatedQuantityEarlyAdop,
  orderController.updateOrder
);

module.exports = earlyAdoptersRouter;
