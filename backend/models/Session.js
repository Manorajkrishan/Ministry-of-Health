const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const sessionSchema = new Schema({
    title:
    {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    targetAudience: {
        type: String,
        required: true
    },

    presenter: {
        type: String,
        required: true
    },
    sampleImg: {
        type: String,
        required: false
    },

})
const session = mongoose.model(`AwarenessSessionManagement`, sessionSchema)
module.exports = session;