const { model, Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    user: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const orderModel = model("order", orderSchema);

module.exports = orderModel;
