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
const babyRouter = require("./routes/babydetails.js");
const VaccineRouter = require("./routes/vaccinedetails");
const patientRouter = require(`./routes/patients`);
const diseaseRouter = require(`./routes/diseases`);
const sessionRouter = require(`./routes/sessions`);
const messageRouter = require(`./routes/messages`);
const phistudentrouter=require(`./routes/router`);
const factoryRouter=require(`./routes/factorydetails`);

// Use route middleware
app.use("/coupledetails", coupleRouter);
app.use("/motherdetails", motherRouter);
app.use("/babydetails",babyRouter);
app.use("/vaccinedetails", VaccineRouter);
app.use(`/disease`, diseaseRouter)
app.use('/patient', patientRouter)
app.use(`/session`, sessionRouter);
app.use(`/message`, messageRouter)
app.use('/', phistudentrouter);
app.use('/factory', factoryRouter);
// Apply CORS middleware
app.use(cors());

// Parse JSON request bodies
app.use(express.json());


// Add schema for students
const students = require("./models/studSchema");

// Add router for students
const studentrouter = require("./routes/student.js");
// Use the router
app.use(studentrouter);
// server port allocation & server start

//Register
require("./models/Register");
const User=mongoose.model("Register");
app.post("/register",async(req,res)=>{
  const{name,address,license,email,phone,password}=req.body;
  try{
    await User.create({
      name,
      address,
      license,
      email,
      phone,
      password,

    }) ;
    res.send({status:"ok"});    
  }catch(err){
    res.send({status:"err"});
  }
});

//Login

app.post("/login",async(req,res)=>{
  const{email,password}=req.body;
  try{
    const user=await User.findOne({email});
    if(!user){
      return res.json({err:"user Not Found"})
    }
    if(user.password===password){
      return res.json({status:"ok"});
    }else{
      return res.json({err:"incorrect Password"});
    }
  }catch(err){
    console.eror(err);
    res.status(500).json({err:"server Err"})
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running at port: ${PORT}`);
});

