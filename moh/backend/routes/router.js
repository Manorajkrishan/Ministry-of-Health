const express=require("express");
const students = require("../models/studSchema");
const router=express.Router();

//POST API
router.post("/AddRecords",async(req,res)=>{
    console.log(req.body);

    const {name,address,parent,contact,health}=req.body;

    if(!name||!address||!parent||!contact||!health){
        res.status(404).json("please fill the Data");

    }
    try{
        const prestd=await students.findOne({contact:contact});
        if(prestd){
            res.status(404).json("This student Already present ");

        }else{
            const addstudent=new students({name,address,parent,contact,health})
            await addstudent.save();
            res.status(201).json(addstudent);
        }


    }catch(err){
        res.status(404).json(err);
    }



})
//get student Data
router.get("/getstud", async(req,res)=>{
    try{
        const studdata= await students.find();
        res.status(201).json(studdata);
    }catch(err){
        res.status(422).json(err)
    }
})

//get signle student Data
router.get("/getstud/:id", async(req,res)=>{
    try{
       const {id}=req.params;
       const singlestud=await students.findById({id});
       res.status(201).json(singlestud);
    }catch(err){
        res.status(422).json(err);
    }
})


//Delete student Data
router.delete("/deletestud/:id", async(req,res)=>{
    try{
       const {id} = req.params;
       const deltestud=await students.findByIdAndDelete({_id:id});
       res.status(201).json(deltestud);
    }catch(err){
        res.status(422).json(err);
    }
})

// update student data
router.put("/updatestud/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updatestud = await students.findByIdAndUpdate(id,req.body,{
            new:true
        });

        res.status(201).json(updatestud);

    } catch (error) {
        res.status(422).json(error);
    }
})


module.exports=router;