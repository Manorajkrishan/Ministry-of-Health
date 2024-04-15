const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Add schema
const students = require("./models/studSchema");

// Add router
const router = require("./routes/router");

// Apply CORS middleware
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Use the router
app.use(router);

mongoose.connect(process.env.Database).then(() => {
    console.log("Database Connected Successfully");
}).catch((err) => {
    console.error("Error connecting to database:", err);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
