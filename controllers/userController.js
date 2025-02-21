const { User } = require("../models/index");
exports.user = async (req, res) => {};

exports.register = async (req, res) => {
  const user = await new User(req.body);
  const savedUser = await user.save();
  res.status(201).json(savedUser);
};
