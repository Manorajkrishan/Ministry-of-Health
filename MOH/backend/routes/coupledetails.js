const express = require('express');
const router = express.Router();
const Coupledetails = require('../models/coupledetails');
const coupledetails = require('../models/coupledetails');
const mothers = require('../models/motherdetails')

router.route("/addcouple").post((req,res)=>{

    const wifeName = req.body.wifeName;
    const husbandName = req.body.husbandName;
    const wifeNic = req.body.wifeNic;
    const husbandNic = req.body.husbandNic;
    const email = req.body.email;
    const tel = req.body.tel;
    const address = req.body.address;
    const familyPlan = req.body.familyPlan;
    
    const newCouple = new Coupledetails({

        wifeName,
        husbandName,
        wifeNic,
        husbandNic,
        email,
        tel,
        address,
        familyPlan
    })

    newCouple.save().then(()=>{
        res.json("Couple Added")
    }).catch((err)=>{
        console.log(err);
    })
})


router.route("/").get((req,res)=>{

    Coupledetails.find().then((coupledetails)=>{
        res.json(coupledetails)
    }).catch((err)=>{
        console.log(err)
    })

})


//get couple details
router.route("/get/:id").get(async (req, res) => {
    let id = req.params.id;
    try {
        const couple = await Coupledetails.findById(id);
        if (couple) {
            res.status(200).send({ status: "Couple fetched", couple });
        } else {
            res.status(404).send({ status: "Couple not found" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: "Error fetching couple", error: err.message });
    }
});

//view couple details 
router.route("/viewcouple/:id").get(async (req, res) => {
    let id = req.params.id;
    try {
        const couple = await Coupledetails.findById(id);
        if (couple) {
            res.status(200).send({ status: "Couple fetched", couple });
        } else {
            res.status(404).send({ status: "Couple not found" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: "Error fetching couple", error: err.message });
    }
});

//edit couple
router.route("/editcouple/:id").put(async(req,res) => {

    let id = req.params.id;
    const {wifeName,husbandName,wifeNic,husbandNic,email,tel,address,familyPlan} = req.body;

    const Updatecouple = {
    wifeName,
      husbandName,
      wifeNic,
      husbandNic,
      email,
      tel,
      address,
      familyPlan
    }

    const update = await Coupledetails.findByIdAndUpdate(id, Updatecouple)  //updateStaff means upadate panna vendiya data oda object
    .then(() => {

        res.status(200).send({status: "Couple updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})

//delete couple
router.route("/deletecouple/:_id").delete(async (req, res) => {
    let userId = req.params._id;

    await Coupledetails.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

//search couple
router.post('/search', async (req, res) => {
    try {
      const searchTerm = req.body.searchTerm;
      const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "");
  
      const couple = await Coupledetails.find({
        $or: [
          { wifeNic: { $regex: new RegExp(searchNoSpecialChar, "i") } },
          { husbandNic: { $regex: new RegExp(searchNoSpecialChar, "i") } },
          { wifeName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
          { Husban: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        ]
      });
  
      res.json({ success: true, existingPosts: couple }); // Send JSON response with search results
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
module.exports = router;
