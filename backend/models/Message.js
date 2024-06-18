const mongoose =require('mongoose')
const Schema  =mongoose.Schema;
const messageSchema =new Schema({
    // email:{
    //     type:String,
    //     requried:true
    // },
    subject:{
        type:String,
        required:true
    },
    textMessage:{
        type:String,
        required:true
    },
    // phone:{
    //     type:String,
    //     required:true
    // },

timestamp:{type:Date,default:Date.now}
})
const Message =mongoose.model('MessageDocument',messageSchema);
module.exports =Message