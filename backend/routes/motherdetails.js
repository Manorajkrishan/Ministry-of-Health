const express = require('express');
const router = express.Router();
const Motherdetails = require("../models/motherdetails");

router.route("/addmother").post((req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const bloodgroup = req.body.bloodgroup;
    const pregnantmonthcount = req.body.pregnantmonthcount;
    const contact = req.body.contact;
    const address = req.body.address;
    const lastconsult = req.body.lastconsult;
    const nextconsult = req.body.nextconsult;
    const email = req.body.email;
    const status = req.body.status;

    const newMother = new Motherdetails({
        name,
        age,
        bloodgroup,
        pregnantmonthcount,
        contact,
        address,
        lastconsult,
        nextconsult,
        email,
        status
    });

    newMother.save().then(() => {
        res.json("Mother Added");
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ status: "Error adding mother", error: err.message });
      });
});



router.route("/").get((req, res) => {
    Motherdetails.find().then((motherdetails) => {
        res.json(motherdetails);
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error fetching mothers", error: err.message });
    });
});

//get mother's details
router.route("/get/:id").get(async (req, res) => {
    let id = req.params.id;
    try {
        const mother = await Motherdetails.findById(id);
        if (mother) {
            res.status(200).send({ status: "Mother fetched", mother });
        } else {
            res.status(404).send({ status: "Mother not found" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: "Error fetching mother", error: err.message });
    }
});

//view mother's details
router.route("/viewmother/:id").get(async (req, res) => {
    let id = req.params.id;
    try {
        const mother = await Motherdetails.findById(id);
        if (mother) {
            res.status(200).send({ status: "Mother fetched", mother });
        } else {
            res.status(404).send({ status: "Mother not found" });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: "Error fetching mother", error: err.message });
    }
});

//edit mother
router.route("/editmother/:id").put(async (req, res) => {
    let id = req.params.id;
    const { name, age, bloodGroup, pregnantMonthCount, contact, address, lastConsult, nextConsult, email, status } = req.body;

    const updatemother = {
        name,
        age,
        bloodGroup,
        pregnantMonthCount,
        contact,
        address,
        lastConsult,
        nextConsult,
        email,
        status
    };

    try {
        const update = await Motherdetails.findByIdAndUpdate(id, updatemother);
        res.status(200).send({ status: "Mother updated" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ status: "Error updating mother", error: err.message });
    }
});

//delete mother
router.route("/deletemother/:_id").delete(async (req, res) => {
    let motherId = req.params._id;

    try {
        await Motherdetails.findByIdAndDelete(motherId);
        res.status(200).send({ status: "Mother deleted" });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: "Error deleting mother", error: err.message });
    }
});

//search mother
router.post('/search', async (req, res) => {
    try {
      const searchTerm = req.body.searchTerm;
      const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "");
  
      const mothers = await Motherdetails.find({
        $or: [
          { name: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        //   { age: { $regex: new RegExp(searchNoSpecialChar, "i") } },
        //   { bloodgroup: { $regex: new RegExp(searchNoSpecialChar, "i") } },
          // Add more fields to search here as needed
        ]
      });
  
      res.json({ success: true, existingPosts: mothers }); // Send JSON response with search results
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
module.exports = router;