const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/openapiRoutes");

const PORT = process.env.PORT || 5000;
const app = express();

app.use("/openai", router);

app.listen(PORT, () => {
  console.log(`Server is up and running on port : ${PORT}`);
});
