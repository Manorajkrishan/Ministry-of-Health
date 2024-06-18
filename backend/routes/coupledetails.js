const express = require('express');
const router = express.Router();
const Coupledetails = require('../models/coupledetails');

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploads
  },
  filename: function (req, file, cb) {
    const marriageCertNo = req.body.marriageno; // Get the marriage certificate number from the request body
    const filename = `${marriageCertNo}.jpg`; // Construct the filename with marriage certificate number and .jpg extension
    cb(null, filename); // Set the filename
  }
});

const upload = multer({ storage: storage });

// Route for uploading marriage certificate photo
router.post("/upload", upload.single("marriageCertificatePhoto"), (req, res) => {
  res.send("File uploaded successfully");
});


router.route("/addcouple").post(upload.single('marriageCertificatePhoto'), (req, res) => {
    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
    }

    // Access uploaded file information using req.file
    const marriageCertificatePhoto = req.file.path;

    // Access other form data using req.body
    const {
        wifeName,
        husbandName,
        wifeNic,
        husbandNic,
        email,
        tel,
        address,
        marriageno,
        familyPlan
    } = req.body;

    // Create a new couple object with the uploaded file and form data
    const newCouple = new Coupledetails({
        wifeName,
        husbandName,
        wifeNic,
        husbandNic,
        email,
        tel,
        address,
        marriageno,
        familyPlan,
        marriageCertificatePhoto // Save the file path in the database
    });

    // Save the new couple to the database
    newCouple.save()
        .then(() => {
            res.json("Couple Added");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Error adding couple");
        });
});

router.route("/").get((req, res) => {
    Coupledetails.find().then((coupledetails) => {
        res.json(coupledetails);
    }).catch((err) => {
        console.log(err);
        res.status(500).send("Error fetching couple details");
    });
});

router.route("/get/:id").get(async (req, res) => {
    try {
        const id = req.params.id;
        const couple = await Coupledetails.findById(id);
        if (!couple) {
            return res.status(404).send({ status: "Couple not found" });
        }
        res.status(200).send({ status: "Couple fetched", couple });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: "Error fetching couple", error: err.message });
    }
});

router.route("/viewcouple/:id").get(async (req, res) => {
    try {
        const id = req.params.id;
        const couple = await Coupledetails.findById(id);
        if (!couple) {
            return res.status(404).send({ status: "Couple not found" });
        }
        res.status(200).send({ status: "Couple fetched", couple });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: "Error fetching couple", error: err.message });
    }
});

router.route("/editcouple/:id").put(async (req, res) => {
    try {
        const id = req.params.id;
        const {
            wifeName,
            husbandName,
            wifeNic,
            husbandNic,
            email,
            tel,
            address,
            marriageno,
            familyPlan,
            marriageCertificatePhoto // Include marriageCertificatePhoto field
        } = req.body;

        const updatedCouple = {
            wifeName,
            husbandName,
            wifeNic,
            husbandNic,
            email,
            tel,
            address,
            marriageno,
            familyPlan,
            marriageCertificatePhoto // Include marriageCertificatePhoto in the updated couple data
        };

        const couple = await Coupledetails.findByIdAndUpdate(id, updatedCouple, { new: true });

        if (!couple) {
            return res.status(404).send({ status: "Couple not found" });
        }

        res.status(200).send({ status: "Couple updated", couple });
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ status: "Error updating couple", error: error.message });
    }
});

router.route("/deletecouple/:_id").delete(async (req, res) => {
    try {
        const userId = req.params._id;
        await Coupledetails.findByIdAndDelete(userId);
        res.status(200).send({ status: "User deleted" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: "Error deleting user", error: err.message });
    }
});

router.post('/search', async (req, res) => {
    try {
        const searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, "");

        const couple = await Coupledetails.find({
            $or: [
                { wifeNic: { $regex: new RegExp(searchNoSpecialChar, "i") } },
                { husbandNic: { $regex: new RegExp(searchNoSpecialChar, "i") } },
                { wifeName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
                { husbandName: { $regex: new RegExp(searchNoSpecialChar, "i") } },
            ]
        });

        res.json({ success: true, existingPosts: couple });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
