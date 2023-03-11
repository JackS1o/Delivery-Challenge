const { model, Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    order: { type: Array, required: true },
  },
  {
    versionKey: false,
  }
);

const orderModel = model("order", orderSchema);

module.exports = orderModel;
