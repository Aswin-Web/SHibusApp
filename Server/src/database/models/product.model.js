const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: { type: String, required: true, unique: true },
  productDescription: { type: String, },
  productPrice: { type:Number , required: true },
  productType: {
    type: String,
    required: true,
  },
  productDiscount: {type:Number,default:0},
  productImage: { type:String}
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
