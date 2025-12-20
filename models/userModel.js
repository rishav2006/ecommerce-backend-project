const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    address: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('user', userSchema);