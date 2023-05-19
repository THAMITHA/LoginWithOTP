require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const PORT = 4002;


//middleware
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server start at Port No :${PORT}`)
});
