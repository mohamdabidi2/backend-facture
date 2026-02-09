const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: { type: String },
    prix: { type: Number, required: true },
    tva: { type: Number, default: 19 }, // Default TVA percentage
    category: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
