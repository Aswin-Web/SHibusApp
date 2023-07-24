const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: { type: String, required: true, unique: true },
  productDescription: { type: String, },
  productPrice: { type:Number , required: true },
  productType: {
    type: "String",
    required: true,
  },
  productImage: { data: Buffer, contentType: String },
});

const Product = mongoose.model("product", ProductSchema);
module.exports = Product;
