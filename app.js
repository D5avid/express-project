const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./router/index");
const { port } = require("./config/config.default");
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors()); // 允许跨域
app.use(morgan("dev"));

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
