const userModel = require('../../models/userModel');
const orderModel = require('../../models/orderModel');
const productModel = require('../../models/productSchema');
const sellerModel = require('../../models/sellerModel');

const newOrder = async (req, res) => {
    let {address, pincode} = req.body;
    const user = await userModel.findById(req.user._id).populate('cart');
    const userCart = user.cart;
    const newOrder = await orderModel.create({
        customer: user._id,
        products: user.cart,
        address,
        pincode,
        date : new Date()
    });
    userCart.forEach(async function(item){
        let seller = await sellerModel.findById(item.seller._id);
        seller.orders.addToSet(newOrder._id);
        await seller.save();
    });
    user.cart = [];
    await user.save();
    res.render('ordered-check');
}

module.exports = newOrder;