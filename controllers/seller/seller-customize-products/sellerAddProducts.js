const productModel = require('../../../models/productSchema');
const sellerAuth = require("../../../middlewares/sellerAuth");

const addProduct = async (req, res) => {
  try {
    let { productName, description, price, image } = req.body;
    if(!productName || !description || !price || !image) return res.send('Fill in all the details');
    let newProduct = await productModel.create({
      name: productName,
      description,
      price,
      image,
      seller: req.seller._id,
    });
    req.seller.products.push(newProduct._id);
    await req.seller.save();
    res.redirect("/seller/admin");
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Error adding products');
  }
};

module.exports = addProduct;
