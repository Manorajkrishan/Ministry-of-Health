const mongoose= require("mongoose");
const studSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    parent:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    
        health:{
            type:String,
            required:true
        }
    
});
const students=new mongoose.model("students",studSchema);
module.exports=students;