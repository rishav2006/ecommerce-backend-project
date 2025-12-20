const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: String,
    decription: String,
    price: Number,
    image: String,
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seller',
        default: ''
    },
    ratings: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('product', productSchema);