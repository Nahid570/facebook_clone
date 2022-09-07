const mongoose = require("mongoose");

const mongoConnect = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB Connection Successful"))
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
