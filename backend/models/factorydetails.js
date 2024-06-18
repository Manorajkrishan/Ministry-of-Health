const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//const CoupleSchema = new Schema({
const factorySchema = new Schema({

    hotelname:{
        type:String,
        required:true
    },


    ownername: {
        type: String,
        required: true
    },

    hoteladdress:{
        type:String,
        required:true
    },

    owneraddress:{
        type:String,
        required:true
    },


    number: {
        type: Number,
        required: true
    },

    nic: {
        type: Number,
        required: true
    },
    

    hotelnumber: {
        type: Number,
        required: true
    },
    

    workers: {
        type: Number,
        required: true,
    },

    wastemanagement:{
        type:String,
        required:true
    },

    sanitary:{
        type:String,
        required:true
    },

    foodpreperation:{
        type:String,
        required:true
    },

    foodstorage:{
        type:String,
        required:true
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
