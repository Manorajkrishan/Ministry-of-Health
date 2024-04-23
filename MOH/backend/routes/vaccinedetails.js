const express = require("express");
const router = express.Router();
const VaccineDetails = require("../models/VaccineSchema");

router.post("/", (req, res) => {
  VaccineDetails.create({ 

  name :req.body.name,
  age : req.body.age,
  dob : req.body.dob,
  vaccineName : req.body.vaccineName,
  vaccineType : req.body.vaccineType,
  dosage : req.body.dosage
  })
    .then((result) => res.json(result))
    .catch((err) => res.log(err));
});

router.get("/", (req, res) => {
  VaccineDetails.find()
    .then((item) => {
      console.log(item);
      res
        .status(200)
        .json({ message: "Item fetched successfully", data: item });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    });
});

//get vaccine details
router.get("/get/:id", async(req, res) => {
  let id = req.params.id;
  try {
    const vaccine = await VaccineDetails.findById(id);
    if (vaccine) {
      res.status(200).send({ status: "vaccine fetched", vaccine });
    } else {
      res.status(404).send({ status: "vaccine not found" });
    }
  } catch (err) {
    console.error(err.message);
    res
      .status(500)
      .send({ status: "Error fetching Student", error: err.message });
  }
});

router.put("/:id", (req, res) => {
  const id = req.params.id; // Use req.params to access route parameters
  VaccineDetails.findByIdAndUpdate(
    id,
    { name: req.body.name, age : req.body.age,
      dob : req.body.dob,
      vaccineName : req.body.vaccineName,
      vaccineType : req.body.vaccineType,
      dosage : req.body.dosage },
    { new: true } // This option returns the updated document
  )
    .then((result) => res.json(result))
    .catch((err) => console.log(err)); // Use console.log to log errors
});


//view couple details
router.route("/viewvaccine/:id").get(async (req, res) => {
  let id = req.params.id;
  try {
      const vaccine = await VaccineDetails.findById(id);
      if (vaccine) {
          res.status(200).send({ status: "Vaccine fetched", vaccine });
      } else {
          res.status(404).send({ status: "Vaccine not found" });
      }
  } catch (err) {
      console.error(err.message);
      res.status(500).send({ status: "Error fetching vaccine", error: err.message });
  }
});


//edit couple
router.route("/editvaccine/:id").put(async (req, res) => {
  let id = req.params.id;
  const {
    name,
    age,
    dob,
    vaccineName,
    vaccineType,
    dosage,
  } = req.body;

  const UpdateVaccine = {
    name,
    age,
    dob,
    vaccineName,
    vaccineType,
    dosage,
  };

  const update = await VaccineDetails.findByIdAndUpdate(id, UpdateVaccine) //updateStaff means upadate panna vendiya data oda object
    .then(() => {
      res.status(200).send({ status: "vaccine updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
});

router.route("/deletevaccine/:_id").delete(async (req, res) => {
  let userId = req.params._id;

  await VaccineDetails.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "User deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete user", error: err.message });
    });
});

module.exports = router;