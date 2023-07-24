// DB
const Product=require('../models/product.model')
const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    return res.status(200).json({ products: products });
  } catch (error) {
    console.log(error);
    return next();
  }
};

module.exports={getAllProducts}