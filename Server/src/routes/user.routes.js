const { AddToWishlistService, RemoveFromWishlistsService } = require("../services/user.services");

function userRoutes(app){

app.get("/user/wishlist/:id",async (req,res,next)=>{
    try {
        const result =await AddToWishlistService(req.params.id,req.user._id)
        console.log(result)
        return res.status(200).json({result:result})
    } catch (error) {
        console.log(error)
        return next()
    }
});

app.delete("/user/wishlist/:id", async (req, res, next) => {
  try {
    const result = await RemoveFromWishlistsService(req.params.id, req.user._id);
    return res.status(200).json({ result: result });
  } catch (error) {
    console.log(error);
    return next();
  }
});

}
module.exports=userRoutes