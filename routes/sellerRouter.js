const express = require('express');
const router = express.Router();
const createSeller = require('../controllers/sellerCreateAccount');
const sellerLogin = require('../controllers/sellerLogin');
const sellerLogout = require('../controllers/sellerLogout');
const seller = require('../middlewares/sellerAuth');
const addProduct = require('../controllers/sellerAddProducts');
const productList = require('../controllers/adminHome');
const productEdit = require('../controllers/sellerEdit');
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