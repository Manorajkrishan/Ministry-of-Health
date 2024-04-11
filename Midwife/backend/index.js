// packages import
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

// port allocation
const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json());

// database link variable decleartion
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
  //   useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //   useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Success !");
});

// Import route files
const coupleRouter = require("./routes/coupledetails.js");
const motherRouter = require("./routes/motherdetails.js");

// Use route middleware
app.use("/coupledetails", coupleRouter);
app.use("/motherdetails", motherRouter);

// server port allocation & server start
app.listen(PORT, () => {
  console.log(`Server is up and running at port: ${PORT}`);
});

