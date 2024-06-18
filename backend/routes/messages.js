const express =require(`express`)
const Message =require(`../models/Message`)
const router =express.Router();
router.route("/add").post((req,res)=>{
    // const phone = req.body.phone
    // const email =req.body.email
    const subject=req.body.subject
    const textMessage =req.body.textMessage


const newMessage =new Message({
  
    // email,
    subject,
    textMessage,
    // phone
});
newMessage.save().then((message)=>{
    res.status(200).send({message:"message added ",message})
}).catch((err)=>{
    res.status(500).send({message:"message not added",err})
})

})
router.route("/display").get((req,res)=>{
    Message.find().then((resM)=>{
        res.status(200).send(resM);

    }
).catch((err)=>{
    res.status(500).send({message:"message display error",err})
})
})

router.route("/update/:id").put(async(req,res)=>{
    let userId = req.params.id
    const{
        // phone,email, textMessage} =req.body
        subject,textMessage} =req.body
        const updatedMessage={
           subject,
            textMessage,
           
        };
        const update =await Message.findByIdAndUpdate(userId,updatedMessage).then((resM)=>{
            res.status(200).send({status:"update message successfull",resM})
        
}).catch((err)=>{
    res.status(500).send({status:"error in update",err})
})
})


router.route("/delete/:id").delete(async(req,res)=>{
    let userId = req.params.id;
    await Message.findByIdAndDelete(userId).then((resM)=>{
        res.status(200).send({status:"deleted message",resM})

    }).catch((err)=>{
        res.status(500).send({status:"error in delete message",err})
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let  userId =req.params.id;
    await Message.findById(userId).then((response)=>{
        res.status(200).send({status:"message fetched",response})

    }).catch((err)=>{
        res.status(500).send({status:"error in fetch message",err})
    })
})

//delete all 

router.route("/resources").delete(async(req,res)=>{
    try{
        const result=await Message.deleteMany({});
        res.status(200).json({message:'reosuces deleted successsfully'})
    }catch(err){
        alert(err);
        console.log(err)
    }
})



module.exports = router