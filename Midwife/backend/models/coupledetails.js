const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CoupleSchema = new Schema({

    wifeName: {
        type: String,
        required: true
    },
    husbandName: {
        type: String,
        required: true
    },
    wifeNic: {
        type: String,
        required: true,
        unique:true
    },
    husbandNic: {
        type: String,
        required: true,
        unique:true
    },

    tel: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },

    address:{
        type: String,
        required: true
    },

    familyPlan:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,  // Set default value to the current date and time
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now,  // Set default value to the current date and time
        required: true
    },
});

module.exports = mongoose.model('Couple', CoupleSchema);
//module.exports = mongoose.model('Couples', CoupleSchema);

