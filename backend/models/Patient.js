const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const patientSchema = new Schema({
    patientName: {
        type: String,
        required: true
    },
    patientNic: {
        type: String,
        requried: true
    },
    patientAge: {
        type: Number,
        required: true
    },
    patientGender: {
        type: String,
        required: true
    },
    patientAddress: {
        type: String,
        required: true
    },
    patientPhone: {
        type: String,
        required: true
    },
    patientAllergies: {
        type: String,
        required: true
    },
    //EM=Exisitng medical conditions
    patientEM: {
        type: String,
        required: true
    },
    patientDisease: {
        type: String,
        required: true
    },
    patientSymptoms: {
        type: String,
        required: true
    },
    patientDateOfDiagnosis: {
        type: Date,
        default: Date.now //sets to the current date and time
    },

    patientImg: {
        type: String,
        required: true
    },
    patientReferredBy: {
        type: String,
        required: true
    },

})
const Patient = mongoose.model(`PatientManagementDocument`, patientSchema);
module.exports = Patient