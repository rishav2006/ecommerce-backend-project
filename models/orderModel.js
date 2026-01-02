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
    payment: {
        type: String,
        default: 'Pay On Delivery'
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    date: {
        type: Date
    }
});

module.exports = mongoose.model('order', orderSchema);