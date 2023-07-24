const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    email: { type: String, unique: true, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
