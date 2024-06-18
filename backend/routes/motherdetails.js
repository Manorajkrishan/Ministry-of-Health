const express = require('express');
const router = express.Router();
const Motherdetails = require("../models/motherdetails");

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploads
  },
  filename: function (req, file, cb) {
    const name = req.body.name; // Get the name from the request body
    const filename = `${name}_${Date.now()}${path.extname(file.originalname)}`; // Construct filename with timestamp and original extension
    cb(null, filename); // Set the filename
  }
});

const upload = multer({ storage: storage });

// Route for adding a mother
router.post("/addmother", upload.single('proofPhoto'), (req, res) => {
    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    // Access uploaded file information using req.file
    const proofPhoto = req.file.path;

    // Access other form data from req.body
    const {
        name,
        dob,
        age,
        bloodgroup,
        pregnantmonthcount,
        contact,
        address,
        lastconsult,
        nextconsult,
        email,
        status
    } = req.body;

    const newMother = new Motherdetails({
        name,
        dob,
        age,
        bloodgroup,
        pregnantmonthcount,
        contact,
        address,
        lastconsult,
        nextconsult,
        email,
        proofPhoto,
        status,
    });

    newMother.save()
        .then(() => {
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
    const { name, dob, age, bloodGroup, pregnantMonthCount, contact, address, lastConsult, nextConsult, email, proofPhoto, status } = req.body;

    const updatemother = {
        name,
        dob,
        age,
        bloodGroup,
        pregnantMonthCount,
        contact,
        address,
        lastConsult,
        nextConsult,
        email,
        proofPhoto,
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