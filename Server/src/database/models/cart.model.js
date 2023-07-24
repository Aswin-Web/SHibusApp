const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "product" },
        quantity: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
