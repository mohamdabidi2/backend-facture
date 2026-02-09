const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: { type: String, unique: true },
    date: { type: Date, default: Date.now },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
    products: [{
        nom: { type: String, required: true },
        quantity: { type: Number, required: true },
        prix: { type: Number, required: true },
        tva: { type: Number, required: true },
        total: { type: Number, required: true }
    }],
    totalHT: { type: Number, required: true },
    totalTVA: { type: Number, required: true },
    totalTTC: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['Espèces', 'Chèque', 'Virement', 'Traite'], default: 'Espèces' },
    status: { type: String, enum: ['unpaid', 'paid', 'partial'], default: 'unpaid' },
    notes: { type: String }
}, { timestamps: true });

// Pre-save hook to generate invoice number if not provided
invoiceSchema.pre('save', async function () {
    if (!this.invoiceNumber) {
        const year = new Date().getFullYear();
        const count = await this.constructor.countDocuments();
        this.invoiceNumber = `FAC-${year}-${(count + 1).toString().padStart(5, '0')}`;
    }
});


module.exports = mongoose.model('Invoice', invoiceSchema);
