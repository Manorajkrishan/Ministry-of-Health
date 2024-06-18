const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const BabySchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  Weight: {
    type: String,
    required: true
  },
  Height: {
    type: String,
    required: true
  },
  BloodType: {
    type: String,
    required: true
  },
  Allergies: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Baby', BabySchema);