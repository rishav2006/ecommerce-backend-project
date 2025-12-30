const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }],
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'seller'
    },
    payment: {
        type: String,
        default: 'Pay On Delivery'
    },
    address: {
        type: String
    },
    pincode: {
        type: Number
    },
    date: {
        type: Date
    }
});

module.exports = mongoose.model('order', orderSchema);