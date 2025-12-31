const express = require('express');
const router = express.Router();
const createSeller = require('../controllers/seller/seller-authentication/sellerCreateAccount');
const sellerLogin = require('../controllers/seller/seller-authentication/sellerLogin');
const sellerLogout = require('../controllers/seller/seller-authentication/sellerLogout');
const seller = require('../middlewares/sellerAuth');
const addProduct = require('../controllers/seller/seller-customize-products/sellerAddProducts');
const productList = require('../controllers/seller/seller-authentication/adminHome');
const productEdit = require('../controllers/seller/seller-customize-products/sellerEdit');
const productModel = require('../models/productSchema');

router.get('/login', (req, res) => {
    res.render('seller-login');
});

router.post('/login', sellerLogin);

router.get('/register', (req, res) => {
    res.render('seller-signup');
});

router.post('/register', createSeller);

router.get('/admin', seller, productList);

router.get('/admin/add', seller, (req, res) => {
    res.render('seller-add-products');
})

router.post('/admin/add', seller, addProduct)

router.get('/admin/edit/:_id', seller, async (req, res) => {
    const product = await productModel.findById(req.params._id);
    res.render('seller-edit-products', {product});
})

router.get('/logout', sellerLogout);

module.exports = router;