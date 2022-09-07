const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const mongoConnect = require("./config/mongodbCon");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoConnect();

// routes
readdirSync("./routes").map((route) =>
  app.use("/", require(`./routes/${route}`))
);

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
