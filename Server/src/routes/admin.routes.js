const {
  CreateProductService,
  CreateCouponService,
  DeleteProductService,
  DeleteCouponService,
  EditProductService,
  CreateFoodTypeService,
  EditFoodTypeService,
  GetCouponService,
} = require("../services/admin.services");

function adminRoutes(app) {
  // CreateProduct
  app.post("/admin/products", async (req, res, next) => {
    try {
      const {
        productName,
        productDescription,
        productPrice,
        productType,
        productDiscount,
        productImage,
      } = req.body;
      const data = await CreateProductService({
        productName,
        productDescription,
        productPrice,
        productType,
        productDiscount,
        productImage,
      });
      return res.status(200).json({ item: data });
    } catch (error) {
      console.log(error);
      return next();
    }
  });
  // DeleteProduct
  app.delete("/admin/products/:id", async (req, res, next) => {
    const _id = req.params.id;
    try {
      if (_id) {
        const result = await DeleteProductService(_id);
        if (result.deletedCount !== 0) {
          return res.status(200).json({ msg: "Item Deleted Successfully" });
        } else {
          return res.status(400).json({ msg: "No Item Deleted " });
        }
      } else {
        return res.status(400).json({ msg: "No _id Was founded" });
      }
    } catch (error) {
      console.log(error);
      return next();
    }
  });
// Edit Product
app.put("/admin/products/:id", async (req, res, next) => {
  try {
    const productID=req.params.id
    const {
      productName,
      productDescription,
      productPrice,
      productType,
      productDiscount,
      productImage,
    } = req.body;

    const data = await EditProductService({
      productID, 
      productName,
      productDescription,
      productPrice,
      productType,
      productDiscount,
      productImage,
    });
    return res.status(200).json({ item: data });
  } catch (error) {
    console.log(error);
    return next();
  }
});


//------------------------------------------------------------------------ 
// CreateCoupon
  app.post("/admin/coupon", async (req, res, next) => {
    try {
      const { couponName, discount, maxUsage, expiryDate } = req.body;
      if (couponName || discount || maxUsage || expiryDate !== undefined) {
        const createCoupon = await CreateCouponService({
          couponName,
          discount,
          maxUsage,
          expiryDate,
        });

        return res
          .status(200)
          .json({ msg: "Created Coupon", coupon: createCoupon });
      }
    } catch (error) {
      console.log(error);
      return next();
    }
  });
// DeleteCoupon
  app.delete("/admin/coupon/:id", async (req, res, next) => {
    const _id = req.params.id;
    try {
      if (_id) {
        const result = await DeleteCouponService(_id);
        if (result.deletedCount !== 0) {
          return res.status(200).json({ msg: "Item Deleted Successfully" });
        } else {
          return res.status(400).json({ msg: "No Item Deleted " });
        }
      } else {
        return res.status(400).json({ msg: "No _id Was founded" });
      }
    } catch (error) {
      console.log(error);
      return next();
    }
  });

//GETCOUPON
app.get("/admin/coupons", async (req, res, next) => {
  const {name}=req.query
  try {
    if (name){
      const result = await GetCouponService(name)
      if (result===null){
        return res.status(400).json({ msg:'No coupon found' });
      }
      if (result){
        return res.status(200).json({result})

      }else{
        return res.status(400).json({msg:'No Coupon Found'})
      }

    }else{
      return res.status(400).json({msg:'no coupon provided'})
    }
  } catch (error) {
    console.log(error);
    return next();
  }
});



// -------------------------------------------------------------------------
// CreateFoodType
app.post("/admin/type", async (req, res, next) => {
  try {
    const { foodType, foodDescription } = req.body;
    if ((foodType || foodDescription !== undefined)) {
      const result = await CreateFoodTypeService({
        foodType,
        foodDescription,
      });

      return res
        .status(200)
        .json({  result: result });
    }
  } catch (error) {
    console.log(error);
    return next();
  }
});

// Edit FoodType
app.put("/admin/type/:id", async (req, res, next) => {
  const TypeID=req.params.id
  try {
    const { foodType, foodDescription } = req.body;
    if (foodType || foodDescription !== undefined) {
      const result = await EditFoodTypeService({
        TypeID,
        foodType,
        foodDescription,
      });

      return res.status(200).json({ result: result });
    }
  } catch (error) {
    console.log(error);
    return next();
  }
});


}

module.exports = adminRoutes;
