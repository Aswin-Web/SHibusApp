const User=require('../../database/models/user.model')
async function AddToWishList(product_id,user_id){
    const result=await User.findOne({_id:user_id})
    if (result.wishlist.length===0){
        result.wishlist=[product_id]
        return result.save()
    }else{
        wishlist=result.wishlist.filter(item=>item.toString()=== product_id)
        if (wishlist.length===0){
            result.wishlist = [product_id, ...result.wishlist];
            return result.save()
        }else{
            return result
        }
        
    }


}
async function RemoveFromWishList(product_id, user_id) {
  const result = await User.findOne({ _id: user_id });
  if (result.wishlist.length !== 0) {
    result.wishlist = result.wishlist.filter(x=> x.toString() !== product_id)
    console.log(result.wishlist)
    return result.save();
  } else {
    
    return result
  }
}

module.exports = { AddToWishList, RemoveFromWishList };