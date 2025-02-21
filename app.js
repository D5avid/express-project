const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./router/index");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(express.json());
app.use(cors()); // 允许跨域
app.use(morgan("dev"));

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
