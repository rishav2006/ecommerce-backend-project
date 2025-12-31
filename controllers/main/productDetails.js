const productModel = require('../../models/productSchema');

const details = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id).populate('seller');
        if (!product) {
            return res.status(404).render('404');
        }
        res.render('product-details', { product });
    }catch(error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
};

module.exports = details;
