const Coupon = require("../models/coupon.model");
const Product = require("../models/product.model");
const FoodType=require("../models/productType.models")
// To Create an Product
async function CreateProduct({
  productName,
  productDescription,
  productPrice,
  productType,
  productDiscount,
  productImage,
}) {
  const product = await Product.create({
    productName,
    productDescription,
    productPrice,
    productType,
    productDiscount,
    productImage,
  });
  return product;
}

// To Delete an Product

async function DeleteProduct(_id) {
  const product = await Product.deleteOne({ _id });
  return product;
}

// Edit Product
async function EditProduct({
  productID,
  productName,
  productDescription,
  productPrice,
  productType,
  productDiscount,
  productImage,
}) {
  let product = await Product.findOneAndUpdate({ _id: productID },{
    productName,
    productDescription,
    productPrice,
    productType,
    productDiscount,
    productImage,
  },{
    new:true
  });
  
  console.log(product)
  return product
}

// --------------------------------------------------------------------
// To Create an Coupon
async function CreateCoupon({
  couponName,
  couponUsage,
  discount,
  maxUsage,
  expiryDate,
}) {
  const data = await Coupon.create({
    couponName,
    couponUsage,
    discount,
    maxUsage,
    expiryDate,
  });
  return data;
}
async function DeleteCoupon(_id) {
  const coupon = await Coupon.deleteOne({ _id });
  return coupon;
}

async function GetCoupon(name) {
  const coupon = await Coupon.findOne({couponName:name });
  return coupon;
}

async function CreateFoodType({ foodType, foodDescription }) {
  const product = await FoodType.create({
    foodType,
    foodDescription,
  });
  console.log(product)
  return product;
}
async function EditFoodType({ foodType, foodDescription,TypeID }) {
  const product = await FoodType.findByIdAndUpdate({
    _id:TypeID
  },{
    foodType,
    foodDescription,
  },{
    new:true
  });
  console.log(product);
  return product;
}


module.exports = {
  CreateProduct,
  DeleteProduct,
  CreateCoupon,
  DeleteCoupon,
  GetCoupon,
  EditProduct,
  CreateFoodType,
  EditFoodType,
};
