const express = require("express");
const dotenv = require("dotenv");
//const logger = require("./middleware/customlogger.js");
const morgan = require("morgan");
const bootcamps = require("./routes/bootcamps.js");
const connectDB = require("./config/db.js");
const colors = require("colors");
const app = express();
const errorHandler = require("./middleware/errorHandler");
app.use(express.json()); //middleware for console.log(req.body) in bootcamps.js

//load config file to load env variables
dotenv.config({ path: "./config/config.env" }); //using env vars

//database connection
connectDB();

//dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routers
app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(
    `server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
//handling unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
