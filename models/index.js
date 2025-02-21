const mongoose = require("mongoose");
const { user } = require("../controllers/userController");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/express-video");
};

connectDB()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  User: require("./userModel"),
};
