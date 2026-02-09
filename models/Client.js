const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    nom: { type: String },
    adresse: { type: String },
    telephone: { type: String },
    email: { type: String },
    MF: { type: String } // Optional: Matricule Fiscal
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
