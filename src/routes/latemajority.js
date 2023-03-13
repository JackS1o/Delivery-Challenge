const { Router } = require("express");

const orderController = require("../controllers/ordersController");

const {
  authToken,
  productExists,
  validateOrderFields,
  invalidUpdatedFields,
} = require("../middleware");

const latemajorityRouter = Router();

latemajorityRouter.post(
  "/latemajority/order",
  authToken,
  productExists,
  validateOrderFields,
  orderController.createOrder
);

latemajorityRouter.patch(
  "/latemajority/order/:id",
  authToken,
  invalidUpdatedFields,
  orderController.updateOrder
);

module.exports = latemajorityRouter;
