const productModel = require('../../../models/productSchema');

const productEdit = async (req, res) => {
    try{
        let {productName, description, price, image} = req.body;
        let id = req.params.id;
        if(!productName || !description || !price || !image) return res.send('Some field values are missing');
        const product = await productModel.findByIdAndUpdate(id, {
            name: productName,
            description,
            price,
            image
        });
        res.redirect('/seller/admin');
    }catch(err){
        res.send('Some error occured');
        console.log(err.message);
    }
};

module.exports = productEdit;