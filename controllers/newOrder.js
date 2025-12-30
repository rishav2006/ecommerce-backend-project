const orderModel = require('../models/orderModel');
const productModel = require('../models/productSchema');

const newOrder = async (req, res) => {
    const {id} = req.params;
    const {address, pincode} = req.body;

    try{
        const product = await productModel.findById(id);
        if (!product){
            return res.status(404).json({message: "Product not found"});
        }
        const order = await orderModel.create({
            customer: req.user._id,
            products: [product._id],
            seller: product.seller,
            address,
            pincode,
            date: new Date()
        });
        res.render('ordered-check');
    }catch(error){
        console.log(error.message);
        res.status(500).json({message: "Server Error"});
    }
};

module.exports = newOrder;