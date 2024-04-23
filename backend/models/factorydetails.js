const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//const CoupleSchema = new Schema({
const factorySchema = new Schema({



    ownername: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    nic: {
        type: Number,
        required: true
    },
    owneraddress: {
        type: String,
        required: true
    },

    hotelname: {
        type: String,
        required: true
    },
    hoteladdress: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true,
    },

    workers: {
        type: Number,
        required: true,
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

const Factory = mongoose.model(`factorydetails`, factorySchema);
module.exports = Factory