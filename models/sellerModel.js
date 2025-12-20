const mongoose = require('mongoose');

let sellerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        default: []
    }],
    contact: Number,
    gstin: Number,
    address: String
});

module.exports = mongoose.model('seller', sellerSchema);