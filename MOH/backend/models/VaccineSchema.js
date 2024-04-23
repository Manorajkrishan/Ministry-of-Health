const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VaccineSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    vaccineName: {
        type: String,
        required: true
    },

    vaccineType: {
        type: String,
        required: true
    },
    dosage: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Vaccine', VaccineSchema);