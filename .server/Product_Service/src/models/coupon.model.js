const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema({
  couponName: { type: String, required: true, unique: true },
  couponUsage: { type: Number, default: 0 },
  maxUsage: { type: Number },
  expiryDate: {
    type: String,
  },
});

const Coupon = mongoose.model("coupon", CouponSchema);
module.exports = Coupon;
s;
