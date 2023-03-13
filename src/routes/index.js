const loginRouter = require("./login"); 
const mvpRouter = require("./mvp");
const earlyAdoptersRouter = require("./earlyadopters");
const earlymajorityRouter = require("./earlymajority");
const latemajorityRouter = require("./latemajority");
const ordersRouter = require("./orders");
const productsRouter = require("./products");

const routes = {
  loginRouter,
  mvpRouter,
  earlyAdoptersRouter,
  earlymajorityRouter,
  latemajorityRouter,
  ordersRouter,
  productsRouter,
};

module.exports = routes;
