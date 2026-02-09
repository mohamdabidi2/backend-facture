const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    nomSociete: { type: String, required: true },
    logo: { type: String }, // Base64 string
    adresse: { type: String, required: true },
    telephone: { type: String, required: true },
    email: { type: String, required: true },
    MF: { type: String }, // Matricule Fiscal
    RIB: { type: String },
    footerMessage: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Company', companySchema);
