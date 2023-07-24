const mongoose = require("mongoose");

const TypeSchema = new mongoose.Schema({
  foodType: { type: String, required: true, unique: true },
  foodDescription: { type: String }
  
});

const FoodType = mongoose.model("type", TypeSchema);
module.exports = FoodType;
