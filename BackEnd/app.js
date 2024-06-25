require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cartRoutes = require("./api/routes/cart");
const bookingRoutes = require("./api/routes/booking");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

//use of morgan
app.use(morgan("dev"));

//use of cors
app.use(cors());

//mongoose connection {
mongoose
  .connect(
    "mongodb+srv://tnmsinha34:" +
      process.env.MONGO_ATLAS_PW +
      "@cluster0.yrzj1z6.mongodb.net/",
    {}
  )
  .then(() => console.log("Connected!"));

//use of parser code
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//code to  handle CORS Error
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin,X-Requested-Width,Content-Type,Accept,Authorization"
  );
  res.header("Access-Control-Allow-Credentials", true);
  if (res.header === "OPTIONS") {
    res.header("Access-Control-Allow-Origin", "PUT", "POST", "DELETE", "GET");
    return res.status(200).json();
  }
  next();
});

app.use("/cart", cartRoutes);
app.use("/booking", bookingRoutes);

//handle error by using middleware
app.use((req, res, next) => {
  const error = new Error("Route not found");
  // error.status(400);
  next(error);
});
app.use((error, req, res, next) => {
  res.status(500).json({
    error: error.message,
  });
});
module.exports = app;
