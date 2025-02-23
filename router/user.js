const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const validator = require("../middleware/validator/userValidator");
const { verifyToken } = require("../utils/jwt");

router
  // .get("/", userController.user)
  .post("/register", validator.register, userController.register)
  .post("/login", validator.login, userController.login)
  .get("/lists", verifyToken, userController.lists);

module.exports = router;
