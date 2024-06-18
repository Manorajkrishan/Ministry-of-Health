const mongoose = require("mongoose");

const studSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    parent: {
        type: String,
        required: true
    },
    contact: {
        type: String, // Changed from Number to String
        required: true
    },
    health: {
        type: String,
        required: true
    },
    vision: {
        type: String // Add the vision field
    },
    overweight: {
        type: Boolean // Add the overweight field
    },
    disabilities: {
        type: String // Add the disabilities field
    },
    date: {
        type: Date // Add the date field
    }
});

const Student = mongoose.model("Student", studSchema); // Changed collection name to singular form "Student"

module.exports = Student;
