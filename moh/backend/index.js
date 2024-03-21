const express=require("express");
const mongoose= require("mongoose");
var cors=require('cors');
var dotenv=require("dotenv")
const app=express();
dotenv.config();

//add schema
const students=require("./models/studSchema");

//add router
const router=require("./routes/router");
app.use(express.json());
app.use(router);
app.use(cors());
mongoose.connect(process.env.Database).then(()=>{
    console.log("Database Connected Succssfully")
}).catch((err)=>{
    console.log(err)
});

app.listen(6000)