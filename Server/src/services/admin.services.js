const AdminRepository = require("../database/repository/admin.repository");

async function CreateProductService(userInputs) {
  try {
    const {
      productName,
      productDescription,
      productPrice,
      productType,
      productDiscount,
      productImage,
    } = userInputs;

    if (
      (productName,
      productDescription,
      productPrice,
      productType,
      productDiscount,
      productImage) !== undefined
    ) {
        const newProduct =await AdminRepository.CreateProduct({
          productName,
          productDescription,
          productPrice,
          productType,
          productDiscount,
          productImage,
        });
        return newProduct
    }else{
        throw new Error('Some undefined were found in the inputs')
    }
  } catch (error) {
    throw new Error('Error @ CreateProductService')
  }
 
}

async function DeleteProductService(_id){
  if (_id) {
const data=AdminRepository.DeleteProduct(_id)
    return data
}else{
  throw new Error('No id was found') 

}
}

async function EditProductService(userInputs) {
  try {
    const {
      productID,
      productName,
      productDescription,
      productPrice,
      productType,
      productDiscount,
      productImage,
    } = userInputs;

    if (
      (productName,
      productDescription,
      productPrice,
      productType,
      productDiscount,
      productImage) !== undefined
    ) {
      const newProduct = await AdminRepository.EditProduct({
        productID,
        productName,
        productDescription,
        productPrice,
        productType,
        productDiscount,
        productImage,
      });
      return newProduct;
    } else {
      throw new Error("Some undefined were found in the inputs");
    }
  } catch (error) {
    console.log(error)
    throw new Error("Error @ CreateProductService");
  }
}

// ----------------------------------------------------------------------------------

async function CreateCouponService(userInputs){
  try {
    const {
      couponName,
      discount,
      maxUsage,
      expiryDate
    }=userInputs

    const newCoupon=await AdminRepository.CreateCoupon({couponName,discount,maxUsage,expiryDate})
    
  } catch (error) {
    console.log(error)
    throw new Error('Error @ CreateCouponService')
  }
}

async function GetCouponService(name) {
  if (name) {
    const data =await AdminRepository.GetCoupon(name);
    return data;
  } else {
    throw new Error("No id was found");
  }
}
async function DeleteCouponService(_id) {
  if (_id) {
    const data = AdminRepository.DeleteCoupon(_id);
    return data;
  } else {
    throw new Error("No id was found");
  }
}
// -------------------------------------------------------------------------------
async function CreateFoodTypeService(userInputs) {
  try {
    const { foodType, foodDescription } = userInputs;

    const newType = await AdminRepository.CreateFoodType({
      foodType,
      foodDescription,
    });
    return newType
  } catch (error) {
    console.log(error);
    throw new Error("Error @ CreateCouponService");
  }
}
async function EditFoodTypeService(userInputs) {
  try {
    const { foodType, foodDescription,TypeID } = userInputs;

    const newType = await AdminRepository.EditFoodType({
      TypeID,
      foodType,
      foodDescription,
    });
    return newType;
  } catch (error) {
    console.log(error);
    throw new Error("Error @ CreateCouponService");
  }
}

module.exports = {
  CreateProductService,
  DeleteProductService,
  EditProductService,
  CreateCouponService,
  DeleteCouponService,
  GetCouponService,
  CreateFoodTypeService,
  EditFoodTypeService,
};