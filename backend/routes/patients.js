const express = require('express');
let Patient = require("../models/Patient");
const router = express.Router();

router.route("/add").post((req, res) => {
    const patientName = req.body.patientName;
    const patientNic = req.body.patientNic
    const patientAge = Number(req.body.patientAge);
    const patientGender = req.body.patientGender;
    const patientAddress = req.body.patientAddress;
    const patientPhone = req.body.patientPhone;
    const patientAllergies = req.body.patientAllergies;
    const patientEM = req.body.patientEM;
    const patientDisease = req.body.patientDisease;
    const patientSymptoms = req.body.patientSymptoms;
    const patientDateOfDiagnosis = req.body.patientDateOfDiagnosis
    const patientImg = req.body.patientImg
    const patientReferredBy = req.body.patientReferredBy
    const newPatient = new Patient({
        patientName,
        patientNic,
        patientAge,
        patientGender,
        patientAddress,
        patientPhone,
        patientAllergies,
        patientEM,
        patientDisease,
        patientSymptoms,
        patientDateOfDiagnosis,
        patientImg,
        patientReferredBy
    });
    newPatient.save().then((newPatientAdd) => {
        res.status(200).send({ message: `patient added`, newPatientAdd });

    }).catch((err) => {
        res.status(500).send({ message: `error in adding the patient`, err });
    

    })

})
router.route("/display").get((req, res) => {
    Patient.find().then((resp) => {
        res.json(resp)
    }).catch((err) => {
        res.status(500).send({ message: "Error in display patient", err })
    })

})
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { patientName, patientNic, patientAge, patientGender, patientAddress, patientPhone, patientAllergies, patientEM, patientDisease, patientSymptoms, patientDateOfDiagnosis, patientImg, patientReferredBy } = req.body;
    const updatedPatient = {
        patientName,
        patientNic,
        patientAge,
        patientGender,
        patientAddress,
        patientPhone,
        patientAllergies,
        patientEM,
        patientDisease,
        patientSymptoms,
        patientDateOfDiagnosis,
        patientImg,
        patientReferredBy
    };
    const update = await Patient.findByIdAndUpdate(userId, updatedPatient).then((resUp) => {
        res.status(200).send({ status: " patient updated successfully", resUp })
    }).catch((err) => {
        res.status(500).send({ status: "error in  patient update", error: err.message })
    })
})
router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;
    await Patient.findByIdAndDelete(userId).then((resD) => {
        res.status(200).send({ message: `  patient deleted successfully`, resD });

    }).catch((err) => {
        res.status(500).send({ status: ` error in  patient delete`, err })
    })
})
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    await Patient.findById(userId).then((response) => {
        res.status(200).send({ status: ` patient fetched`, userId, response });

    }).catch((err) => {
        res.status(500).send({ status: `error in  patient fetching` })
    })
})


module.exports = router