const mongoose = require("mongoose");
const md5 = require("md5");
const userSchema = new mongoose.Schema({
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
    set: (val) => md5(val), // 加密密码
    select: false, // 不返回密码
  },
  phone: { type: String, required: true },
  avatar: { type: String, default: "" },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
