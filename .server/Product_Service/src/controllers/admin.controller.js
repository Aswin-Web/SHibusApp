const Product = require("../models/product.model");
// Routes

// ROUTE: /admin/products
const postAProduct = async (req, res, next) => {
  try {
    console.log("posts");
    const {
      productName,
      productDescription,
      productPrice,
      productType,
      output,
    } = req.body;
   
    const { data } = await Product.create({
      productName,
      productDescription,
      productPrice: Number(productPrice),
      productType,
      productImage: output,
    });
    res.status(201).json({data:data});
  } catch (error) {
    console.log(error);
    return next();
  }
};
module.exports = { postAProduct };
