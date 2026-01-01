const userModel = require('../../models/userModel');

const cartHome = async (req, res) => {
    try{
        const id = req.user.id;
        const user = await userModel.findById(id).populate('cart');
        res.render('my-cart', {cart: user.cart});
    }catch(err){
        res.status(404).send('Server Error by Catch');
        console.log('Server Error by Catch');
    }
};

module.exports = cartHome;