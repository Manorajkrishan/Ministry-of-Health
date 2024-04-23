const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const diseaseSchema = new Schema({
    diseaseName: {
        type: String,
        required: true
    },

    symptoms: {
        type: String,
        required: true
    },

    causes: {
        type: String,
        required: true
    },

    preventionMeasures: {
        type: String,
        required: false
    },
    treatmentOption: {
        type: String,
        required: true
    },
    diagnosticTest: {
        type: String,
        required: false
    },
    riskFactors: {
        type: String,
        required: true
    },
    managementGuidlines: {
        type: String,
        required: false
    },

    publicHealthRecommendations: {
        type: String,
        required: true
    }
}
)
const Disease = mongoose.model(`DiseaseManagmentDocument`, diseaseSchema);
module.exports = Disease

