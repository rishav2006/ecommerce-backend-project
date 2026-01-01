const productModel = require('../../models/productSchema');

const cartAdd = async (req, res) => {
    try{
        let {id} = req.params;
        const product = await productModel.findById(id);
        req.user.cart.push(product._id);
        await req.user.save();
        res.redirect('/cart');
    }catch(err){
        res.status(404).send('Server Error by Catch');
        console.log('Server Error by Catch');
    }
};

module.exports = cartAdd;