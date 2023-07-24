const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userID: { type: Schema.Types.ObjectId, ref: "user" },
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "user" },
        quantity: Number,
      },
    ],
    orderStatus: [{ stage: Number, description: String }],
    orderPrice:{
        type:Number,
        required:true
    }  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;
