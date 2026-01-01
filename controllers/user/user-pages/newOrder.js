const orderModel = require('../../../models/orderModel');
const productModel = require('../../../models/productSchema');
const sellerModel = require('../../../models/sellerModel');

const newOrder = async (req, res) => {
    const {id} = req.params;
    const {address, pincode} = req.body;

    try{
        const product = await productModel.findById(id).populate('seller');
        if (!product){
            return res.status(404).json({message: "Product not found"});
        }
        const order = await orderModel.create({
            customer: req.user._id,
            products: [product._id],
            address,
            pincode,
            date: new Date()
        });
        const seller = await sellerModel.findById(product.seller._id);
        seller.orders.push(order._id);
        await seller.save();
        res.render('ordered-check');
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: "Server Error"});
    }
};

module.exports = newOrder;