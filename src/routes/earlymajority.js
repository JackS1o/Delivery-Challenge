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

const earlymajorityRouter = Router();

earlymajorityRouter.post(
  "/earlymajority/order",
  authToken,
  productExists,
  invalidQuantity,
  validateOrderFields,
  orderController.createOrder
);

earlymajorityRouter.patch(
  "/earlymajority/user/order/:id",
  authToken,
  invalidUpdatedQuantity,
  invalidUpdatedFields,
  orderController.updateOrder
);

module.exports = earlymajorityRouter;
