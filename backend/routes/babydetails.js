const express = require('express');
const router = express.Router();
const Babydetails = require('../models/babydetails');

router.route("/addbaby").post((req,res)=>{

    const Name= req.body.Name;
    const Gender= req.body.Gender;
    const Weight= req.body.Weight;
    const Height= req.body.Height;
    const BloodType= req.body.BloodType;
    const Allergies= req.body.Allergies;
    const date= req.body.date;
    const phone= req.body.phone;
    const Email= req.body.Email;
    const Address= req.body.Address;
    
    const newBaby = new Babydetails({

       Name,
       Gender,
       Weight,
       Height,
       BloodType,
       Allergies,
       date,
       phone,
       Email,
       Address,
    })

    newBaby.save().then(()=>{
        res.json("Baby Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{

    Babydetails.find().then((babydetails)=>{
        res.json(babydetails)
    }).catch((err)=>{
        console.log(err)
    })

})



router.route("/get/:id").get(async (req, res) => {
    let id = req.params.id;
    try {
        const baby = await Babydetails.findById(id);
        if (baby) {
            res.status(200).send({ status: "Baby details fetched", baby });
        } else {
            res.status(404).send({ status: "Baby details not found" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: "Error fetching Baby", error: err.message });
    }
});


router.route("/viewbaby/:id").get(async (req, res) => {
    let id = req.params.id;
    try {
        const baby = await Babydetails.findById(id);
        if (baby) {
            res.status(200).send({ status: "Baby details fetched", baby });
        } else {
            res.status(404).send({ status: "Baby not found" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: "Error fetching baby", error: err.message });
    }
});

//edit couple
router.route("/editbaby/:id").put(async(req,res) => {

    let id = req.params.id;
    const {Name,Gender,Weight,Height,BloodType,Allergies,date,phone,Email,Address} = req.body;

    const Updatebaby = {
   
        Name,
        Gender,
        Weight,
        Height,
        BloodType,
        Allergies,
        date,
        phone,
        Email,
        Address,
    }

    const update = await Babydetails.findByIdAndUpdate(id, Updatebaby)  //updateStaff means upadate panna vendiya data oda object
    .then(() => {

        res.status(200).send({status: "Baby updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})


router.route("/deletebaby/:_id").delete(async (req, res) => {
    let userId = req.params._id;

    await Babydetails.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

// Add a new route for searching babies


module.exports = router;