const productModel = require('../models/productSchema');

const homePage = async (req, res) => {
    const products = await productModel.find();
    res.render('home', {products});
}

module.exports = homePage;