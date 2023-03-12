const { productExists, invalidQuantity } = require("./orderValidation");
const { authToken } = require("./tokenValidation");
const { validateLogin, validateOrderFields } = require("./validateFields");
const { invalidUpdatedQuantity, invalidUpdatedFields } = require("./updateOrder");

module.exports = {
  productExists,
  invalidQuantity,
  authToken,
  validateLogin,
  validateOrderFields,
  invalidUpdatedQuantity,
  invalidUpdatedFields,
};
