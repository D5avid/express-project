const { User } = require("../models/index");
const { createToken } = require("../utils/jwt");
exports.user = async (req, res) => {};

exports.register = async (req, res) => {
  const user = await new User(req.body);
  const savedUser = await user.save();
  delete savedUser.password;
  res.status(201).json(savedUser);
};

exports.login = async (req, res) => {
  let result = await User.findOne(req.body);
  // 登录信息验证
  if (!result) {
    return res.status(402).json({ message: "邮箱或密码错误" });
  }

  result = result.toJSON();
  // 生成token
  result.token = await createToken(result);
  // 登录成功返回token
  res.status(200).json(result);
};

exports.lists = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
