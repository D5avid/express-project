const { body, validationResult } = require("express-validator");
const { User } = require("../../models/index");
const error = require("./error");
module.exports.register = error([
  body("username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .bail()
    .isLength({ min: 3 })
    .withMessage("用户名长度不能少于3个字符"),
  body("email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .bail()
    .isEmail()
    .withMessage("邮箱不存在")
    .bail()
    .custom(async (val) => {
      const result = await User.findOne({ email: val });
      if (result) {
        return Promise.reject("邮箱已注册");
      }
    }),
  body("phone")
    .notEmpty()
    .withMessage("手机号不能为空")
    .bail()
    .custom(async (val) => {
      const result = await User.findOne({ phone: val });
      if (result) {
        return Promise.reject("手机号已注册");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("密码不能为空")
    .bail()
    .isLength({ min: 5 })
    .withMessage("密码长度不能少于5个字符"),
  ,
]);

module.exports.login = error([
  body("email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .bail()
    .isEmail()
    .withMessage("邮箱不存在")
    .bail()
    .custom(async (val) => {
      const result = await User.findOne({ email: val });
      if (!result) {
        return Promise.reject("邮箱未注册");
      }
    }),
  ,
  body("password").notEmpty().withMessage("密码不能为空"),
]);
