const { AddToWishList, RemoveFromWishList } = require("../database/repository/user.repository")

async function AddToWishlistService(productID,userID){
    const result=await AddToWishList(productID,userID)
    return result
}
async function RemoveFromWishlistsService(productID, userID) {
  const result = await RemoveFromWishList(productID, userID);
  return result;
}

module.exports = { AddToWishlistService, RemoveFromWishlistsService };