const mongoose = require("mongoose");
const Schoolschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  telephoneNumber: {
    type: String,
    required: true,
  },
  numberOfTeachers: {
    type: Number,
    required: true,
  },
  numberOfStudents: {
    type: Number,
    required: true,
  },
  dentalDetails: {
    type: String,
    required: true,
  },
  dentalDetails_text: {
    type: String,
    required: true,
  },
  toiletFacilities: {
    type: String,
    required: true,
  },
  toiletFacilities_text: {
    type: String,
    required: true,
  },
  waterSupply: {
    type: String,
    required: true,
  },
  waterSupply_text: {
    type: String,
    required: true,
  },
  schoolCanteen: {
    type: String,
    required: true,
  },
  schoolCanteen_text: {
    type: String,
    required: true,
  }
});

const School = new mongoose.model("School", Schoolschema);
module.exports = School;

