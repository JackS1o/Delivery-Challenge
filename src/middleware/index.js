const { productExists, invalidQuantity } = require("./orderValidation");
const { authToken } = require("./tokenValidation");
const { validateLogin, validateOrderFields } = require("./validateFields");
const { invalidUpdatedQuantity, invalidUpdatedFields } = require("./updateOrder");
const { errorHandler } = require("./error");

module.exports = {
  productExists,
  invalidQuantity,
  authToken,
  validateLogin,
  validateOrderFields,
  invalidUpdatedQuantity,
  invalidUpdatedFields,
  errorHandler,
};
