const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  avatar: { type: String, default: "" },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
