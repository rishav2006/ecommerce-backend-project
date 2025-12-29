const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seller',
        default: null
    },
    ratings: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('product', productSchema);