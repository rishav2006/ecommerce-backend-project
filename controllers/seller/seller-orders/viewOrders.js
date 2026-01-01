const sellerModel = require("../../../models/sellerModel");
const productModel = require("../../../models/productSchema");

const viewOrders = async (req, res) => {
    const seller = await sellerModel.findById(req.seller._id).populate({path: 'orders', populate: {path: 'products', populate: {path: 'seller'}}});
    let mainProducts = [];

    seller.orders.forEach(order => {
        order.products.forEach(product => {
            if (product.seller._id.toString() == seller._id.toString()){
                mainProducts.push(product);
            }
        })
    })

    res.render('seller-orders', {mainProducts});
};

module.exports = viewOrders;