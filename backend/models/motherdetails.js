const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MotherSchema = new Schema({
    name:{
        type:String,
        required:true
    },

    dob:{
        type:Date,
        required:true
    },

    age:{
        type:Number,
        required:true
    },

    bloodgroup:{
        type:String,
        required:true
    },

    pregnantmonthcount:{
        type:Number,
        required:true
    },

    contact:{
        type:String,
        required:true,
        unique:true
    },

    address:{
        type:String,
        required:true
    },

    lastconsult:{
        type:Date,
        required:true
    },

    nextconsult:{
        type:Date,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    proofPhoto: {
        type: String,
        required: true // Or adjust as needed
    },

    status:{
        type:String
    }

});

module.exports = mongoose.model('Mother', MotherSchema);
//module.exports = mongoose.model('Mothers', MotherSchema);