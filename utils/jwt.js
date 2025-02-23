const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { secret } = require("../config/config.default");

const signAsync = promisify(jwt.sign);
const verifyAsync = promisify(jwt.verify);

module.exports.createToken = async (payload) => {
  return await signAsync(payload, secret, { expiresIn: 60 * 60 * 24 });
};

module.exports.verifyToken = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.status(402).json({ error: "无token信息" });
  }
  token = token.split("Bearer ")[1];
  try {
    const userInfo = await verifyAsync(token, secret);
    req.userInfo = userInfo; // 给req添加userInfo属性, 方便后续使用验证用户信息
    next();
  } catch (error) {
    return res.status(402).json({ error: "无效token" });
  }
};
