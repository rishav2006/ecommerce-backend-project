const userModel = require('../../models/userModel');

const cartRemove = async (req, res) => {
    try{
        let {id: pid} = req.params;
        const user = await userModel.findById(req.user._id);
        const idx = user.cart.findIndex(id => id.toString() === pid);
        if(idx !== -1){
            user.cart.splice(idx, 1);
            await user.save();
        }
        res.redirect('/cart');
    }catch(err){
        res.status(404).send('Server Error by Catch');
        console.log('Server Error by Catch');
    }
};

module.exports = cartRemove;