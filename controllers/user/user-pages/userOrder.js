const orderModel = require('../../../models/orderModel');

const userOrder = async (req, res) => {
    const orders = await orderModel.find({customer: req.user._id}).populate('products');
    res.render('my-orders', {orders});
}

module.exports = userOrder;