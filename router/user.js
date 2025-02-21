const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.user).post("/register", userController.register);

module.exports = router;
