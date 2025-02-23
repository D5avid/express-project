const mongoose = require("mongoose");
const ora = require("ora");
const { user } = require("../controllers/userController");
const spinner = ora("Connecting to database...");
const { db } = require("../config/config.default");
const connectDB = async () => {
  spinner.start();
  await mongoose.connect(db.path);
};

connectDB()
  .then(() => {
    spinner.succeed("Database connected successfully");
  })
  .catch((err) => {
    spinner.fail("Error connecting to database");
  });

module.exports = {
  User: require("./userModel"),
};
