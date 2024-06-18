const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VaccineSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    contactno:{
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    agegroup:{
        type: String,
        required: true
    },
    vaccines:{
        type: [String],
        required: true
    },
});

module.exports = mongoose.model('Vaccine', VaccineSchema);

