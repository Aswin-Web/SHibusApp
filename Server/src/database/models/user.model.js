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
    wishlist:[{
        type:mongoose.Types.ObjectId,
        ref:'product'
    }],
    order:{

    }
  },

  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
