const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    fullname: String,
    image: String,
    email: String,
    password: String,
    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        default: []
    }],
    orders: {
        type: Array,
        default: []
    },
    contact: String,
    address: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('user', userSchema);