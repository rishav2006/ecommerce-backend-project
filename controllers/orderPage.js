const orderModel = require('../models/orderModel');
const productModel = require('../models/productSchema');

const orderPage = async (req, res) => {
    let {id} = req.params;
    const product = await productModel.findById(id).populate('seller');
    res.render('new-order', {product});
}

module.exports = orderPage;