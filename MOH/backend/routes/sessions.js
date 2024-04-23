const express = require(`express`)
let Session = require("../models/Session");
const router = express.Router();
router.route("/add").post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const date = req.body.date;
    const time = req.body.time;
    const location = req.body.location;
    const targetAudience = req.body.targetAudience;
    const presenter = req.body.presenter;
    const sampleImg = req.body.sampleImg;
    const newSession = new Session({
        title,
        description,
        date,
        time,
        location,
        targetAudience,
        presenter,
        sampleImg,

    });
    newSession.save().then((newSession) => {
        res.status(200).send({ message: "session added", newSession });

    }).catch((err) => {
        res.status(500).send({ message: "session unsuccessfully added", err })

    })
})

router.route("/display").get((req, res) => {
    Session.find().then((resp) => {
        res.json(resp)
    }).catch((err) => {
        res.status(500).send({ message: `error in display`, err });
    })
})
router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { title, description, date, time, location, targetAudience, presenter, sampleImg } = req.body;

    const updateSession = {
        title,
        description,
        date,
        time,
        location,
        targetAudience,
        presenter,
        sampleImg
    };
    const update = await Session.findByIdAndUpdate(userId, updateSession).then((resU) => {
        res.status(200).send({ status: "session updated successfully", resU });
    }).catch((err) => {
        res.status(500).send({ status: "error in update of the session", err });
        console.log(err);
    })



})

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;
    await Session.findByIdAndDelete(userId).then((deletedSession) => {
        res.status(200).send({ status: "deleted succcessfully", deletedSession });

    }).catch((err) => {
        res.status(500).send({ status: "Error in delete", err });
    })
})
router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;
    await Session.findById(userId).then((response) => {
        res.status(200).send({ status: "session fetched", response })
    }).catch((err) => {
        res.status(500).send({ status: "error in fetch", err });
    })
})

module.exports = router