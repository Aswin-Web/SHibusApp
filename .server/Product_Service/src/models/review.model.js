const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  productID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'product'
  },
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
  review:{type:String},
  rating:{type:Number}

});

const Review = mongoose.model("review", ReviewSchema);
module.exports = Review;
