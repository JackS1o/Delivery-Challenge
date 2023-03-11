const { model, Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    user: { type: String, required: true },
    paymentMethod: { type: String, required: true },
    address: { type: String, required: true },
    order: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
      }
    ]
  },
  {
    versionKey: false,
  }
);

const orderModel = model("order", orderSchema);

module.exports = orderModel;
