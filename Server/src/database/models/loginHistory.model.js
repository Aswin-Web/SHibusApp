const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const LoginHistorySchema = new mongoose.Schema({
  userID:Schema.Types.ObjectId,
  ref:'user'
},{
    timestamps:true
});

const LoginHistory = mongoose.model("loginhistory", LoginHistorySchema);
module.exports = LoginHistory;
