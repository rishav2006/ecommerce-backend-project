const orderModel = require('../../../models/orderModel');

const orderDetails = async (req, res) => {
    let {id} = req.params;
    const orders = await orderModel.findById(id).populate('products');
    const orderUser = await orderModel.findById(id).populate('customer');
    const products = orders.products;
    let mainProducts = [];
    products.forEach(function(val) {
        if(val.seller._id.toString() == req.seller._id.toString()){
            mainProducts.push(val);
        }
    })
    res.render('seller-order-details', {mainProducts, orderUser, orders});
}

module.exports = orderDetails;