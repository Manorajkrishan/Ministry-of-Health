const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const midwifeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  license: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
 
});

module.exports = mongoose.model('Register', midwifeSchema);
