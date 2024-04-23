const mongoose = require("mongoose");
const Studentschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  number : {
    type: String,
    required: true,
  },
  height : {
    type: Number,
    required: true,
  },
  weight : {
    type: Number,
    required: true,
  },
  BMI : {
    type: Number,
    required: true,
  },
  stunting : {
    type: String,
    required: true,
  },
  wasting : {
    type: String,
    required: true,
  },
  overweight : {
    type: String,
    required: true,
  }

});

const studentso = new mongoose.model("studentInfo", Studentschema);
module.exports = studentso;
