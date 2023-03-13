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

const earlyAdoptersRouter = Router();

earlyAdoptersRouter.post(
  "/earlyadopters/order",
  authToken,
  productExists,
  invalidQuantity,
  validateOrderFields,
  orderController.createOrder
);

earlyAdoptersRouter.patch(
  "/earlyadopters/user/order/:id",
  authToken,
  invalidUpdatedQuantity,
  invalidUpdatedFields,
  orderController.updateOrder
);

module.exports = earlyAdoptersRouter;
