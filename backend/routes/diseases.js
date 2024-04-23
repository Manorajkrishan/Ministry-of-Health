const express = require(`express`);
let Disease = require(`../models/Disease`);
const router = express.Router();

router.route("/add").post((req, res) => {

    const diseaseName = req.body.diseaseName
    const symptoms = req.body.symptoms
    const causes = req.body.causes
    const preventionMeasures = req.body.preventionMeasures
    const treatmentOption = req.body.treatmentOption
    const diagnosticTest = req.body.diagnosticTest
    const riskFactors = req.body.riskFactors
    const managementGuidlines = req.body.managementGuidlines
    const publicHealthRecommendations = req.body.publicHealthRecommendations

    const newDisease = new Disease({
        diseaseName,
        symptoms,
        causes,
        preventionMeasures,
        treatmentOption,
        diagnosticTest,
        riskFactors,
        managementGuidlines,
        publicHealthRecommendations,
    });
    newDisease.save().then((disease) => {
        res.status(200).send({ message: "Disease added successfully", disease });

    }).catch((err) => {
        res.status(500).send({ message: "disease not added", err })
    })
})
router.route("/display").get((req, res) => {
    Disease.find().then((respD) => {
        res.status(200).send(respD);
    }).catch((err) => {
        res.status(500).send({ message: "disease display error", error: err.message })

    })
})

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const {
        diseaseName, sypmtoms, causes, preventionMeasures, treatmentOption, diagnosticTest, riskFactors, managementGuidlines, publicHealthRecommendations } = req.body;
    const updatedDisease = {
        diseaseName,
        sypmtoms,
        causes,
        preventionMeasures,
        treatmentOption,
        diagnosticTest,
        riskFactors,
        managementGuidlines,
        publicHealthRecommendations
    };
    const update = await Disease.findByIdAndUpdate(userId, updatedDisease).then((resp) => {
        res.status(200).send({ status: "updates successfully", resp })
    }).catch((err) => {
        res.status(500).send({ status: "error in update", err });
    })
})

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;
    await Disease.findByIdAndDelete(userId).then((resD) => {
        res.status(200).send({ status: "deleted successfully", resD })
    }).catch((err) => {
        res.status(500).send({ status: "error in delete", err });

    })
})
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    await Disease.findById(userId).then((response) => {
        res.status(200).send({ status: "fetched successfully", response })
    }).catch((err) => {
        res.status(500).send({ status: "error in fetch", err });
    })

})


router.route("/search").post(async(req, res)=> {
    const locals = {
        title: "search details",
        description: "Search react",
    };
    try {
        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");
        const disease = await Disease.find({
            $or: [{
                diseaseName: { $regex: new RegExp(searchNoSpecialChar, "i") }
            },
                //    lastname:{$regex:new RegExp(searchNoSpecialChar, "i")},
            ]
        });
        res.render("search", {
            disease,
            locals
        })
    }
    catch (error) {
        console.log(error);
    }
    
})


module.exports = router;