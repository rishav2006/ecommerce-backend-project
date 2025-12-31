const sellerModel = require('../../../models/sellerModel');

const productList = async (req, res) => {
    const seller = await sellerModel.findById(req.seller._id).populate('products');
    res.render('seller-home', {products: seller.products});
}

module.exports = productList;