const express = require("express");
const Student = require("../models/studSchema"); // Changed import to use the model
const router = express.Router();

// POST API
router.post("/AddRecords", async (req, res) => {
    console.log(req.body);

    const { name, address, parent, contact, health, vision, overweight, disabilities, date } = req.body;

    if (!name || !address || !parent || !contact || !health) {
        res.status(400).json("Please fill all the required fields");
        return;
    }

    try {
        const existingStudent = await Student.findOne({ contact: contact });
        if (existingStudent) {
            res.status(400).json("This student already exists");
            return;
        }

        const newStudent = new Student({ name, address, parent, contact, health, vision, overweight, disabilities, date });
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get all student data
router.get("/getstud", async (req, res) => {
    try {
        const studentData = await Student.find();
        res.status(200).json(studentData);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get a single student data by ID
router.get("/getstud/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            res.status(404).json({ message: "Student not found" });
            return;
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Update student data
router.patch("/updatestud/:id", async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedStudent) {
            res.status(404).json({ message: "Student not found" });
            return;
        }
        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

// Delete student data
router.delete("/deletestud/:id", async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            res.status(404).json({ message: "Student not found" });
            return;
        }
        res.status(200).json(deletedStudent);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
