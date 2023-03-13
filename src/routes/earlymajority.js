const { Router } = require("express");

const orderController = require("../controllers/ordersController");

const {
  authToken,
  productExists,
  validateOrderFields,
  invalidUpdatedFields,
  invalidUpdatedQuantityEarlyMajor,
  invalidQuantityEarlyMajor,
} = require("../middleware");

const earlymajorityRouter = Router();

earlymajorityRouter.post(
  "/earlymajority/order",
  authToken,
  productExists,
  validateOrderFields,
  invalidQuantityEarlyMajor,
  orderController.createOrder
);

earlymajorityRouter.patch(
  "/earlymajority/order/:id",
  authToken,
  invalidUpdatedFields,
  invalidUpdatedQuantityEarlyMajor,
  orderController.updateOrder
);

module.exports = earlymajorityRouter;
