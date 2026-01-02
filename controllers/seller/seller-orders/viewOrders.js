const sellerModel = require("../../../models/sellerModel");
const productModel = require("../../../models/productSchema");
const userModel = require("../../../models/userModel");

const viewOrders = async (req, res) => {
    // const seller = await sellerModel.findById(req.seller._id).populate({path: 'orders', populate: {path: 'products', populate: {path: 'seller'}}});
    // let mainProducts = [];

    // seller.orders.forEach(order => {
    //     order.products.forEach(product => {
    //         if (product.seller._id.toString() == seller._id.toString()){
    //             mainProducts.push(product);
    //         }
    //     })
    // })

    const seller = await sellerModel.findById(req.seller._id).populate({path: 'orders', populate: {path: 'customer'}});

    res.render('seller-orders', {seller});
};

module.exports = viewOrders;