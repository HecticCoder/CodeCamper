const mongoose = require("mongoose");
connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(
    `MongoDB is connected: ${conn.connection.host}`.blue.underline.bold
  );
};

module.exports = connectDB;
//why exports.connectDB does not work for this???????
