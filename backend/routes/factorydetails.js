const express = require('express');
const router = express.Router();
const factorydetails = require('../models/factorydetails');

router.route("/add").post((req, res) => {
    const { ownername, number, nic, owneraddress, hotelname, hoteladdress, Date,
        workers} = req.body;

    const newFactory = new factorydetails({
        ownername,
        number,
        nic,
        owneraddress,
        hotelname,
        hoteladdress,
        Date,
        workers
       // email
    });

    newFactory.save()
        .then((result) => {
            res.json("Added");
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ status: "Error adding factory", error: err.message });
        });
});

router.route("/").get((req, res) => {
    factorydetails.find()
        .then((factories) => {
            res.json(factories);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({ status: "Error fetching factories", error: err.message });
        });
});

router.route("/get/:id").get(async (req, res) => {
    const id = req.params.id;
    try {
        const factory = await factorydetails.findById(id);
        if (factory) {
            res.status(200).send({ status: "Factory fetched", factory });
        } else {
            res.status(404).send({ status: "Factory not found with ID: " + id });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error fetching factory", error: err.message });
    }
});

router.route("/editfactory/:id").put(async (req, res) => {
    const id = req.params.id;
    const { ownername, number, nic, owneraddress, hotelname, hoteladdress, Date,
        workers } = req.body;

    const updatedFactory = {
        ownername,
        number,
        nic,
        owneraddress,
        hotelname,
        hoteladdress,
        Date,
        workers
        
    };

    try {
        const update = await factorydetails.findByIdAndUpdate(id, updatedFactory);
        res.status(200).send({ status: "Factory updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error updating factory", error: err.message });
    }
});

router.route("/deletefactory/:id").delete(async (req, res) => {
    const factoryId = req.params.id; // Correct variable name to factoryId
    try {
        const deletedFactory = await factorydetails.findByIdAndDelete(factoryId);
        if (deletedFactory) {
            res.status(200).send({ status: "Factory deleted" });
        } else {
            res.status(404).send({ status: "Factory not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send({ status: "Error deleting factory", error: err.message });
    }
});


module.exports = router;