const productModel = require('../../models/productSchema');

const homePage = async (req, res) => {
    const products = await productModel.find();
    let user = req.user;
    res.render('home', {products, user});
}

module.exports = homePage;