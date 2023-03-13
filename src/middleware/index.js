const {
  productExists,
  invalidQuantityMVP,
  invalidQuantityEarlyAdop,
  invalidQuantityEarlyMajor,
} = require("./orderValidation");
const { authToken } = require("./tokenValidation");
const { validateLogin, validateOrderFields } = require("./validateFields");
const {
  invalidUpdatedQuantityMVP,
  invalidUpdatedFields,
  invalidUpdatedQuantityEarlyAdop,
  invalidUpdatedQuantityEarlyMajor,
} = require("./updateOrder");
const { errorHandler } = require("./error");

module.exports = {
  productExists,
  invalidQuantityMVP,
  invalidQuantityEarlyAdop,
  authToken,
  validateLogin,
  validateOrderFields,
  invalidUpdatedFields,
  errorHandler,
  invalidUpdatedQuantityMVP,
  invalidUpdatedQuantityEarlyAdop,
  invalidUpdatedQuantityEarlyMajor,
  invalidQuantityEarlyMajor,
};
