const express = require("express");
const { errorHandler } = require("./middleware");
const routes = require("./routes");

const app = express();

app.use(express.json());

app.use("/", routes.earlyAdoptersRouter);
app.use("/", routes.earlymajorityRouter);
app.use("/", routes.latemajorityRouter);
app.use("/", routes.loginRouter);
app.use("/", routes.mvpRouter);
app.use("/", routes.ordersRouter);
app.use("/", routes.productsRouter);

app.use(errorHandler);

module.exports = app;
