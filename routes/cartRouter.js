const express = require('express');
const router = express.Router();
const userAuth = require('../middlewares/userAuth');
const cartHome = require('../controllers/cart/cart-home');
const cartAdd = require('../controllers/cart/cart-add');
const cartRemove = require('../controllers/cart/cart-remove');
const newOrder = require('../controllers/cart/new-order');

router.get('/', userAuth, cartHome);

router.get('/post/remove/:id', userAuth, cartRemove);

router.get('/post/:id', userAuth, cartAdd);

router.post('/new-order', userAuth, newOrder);

module.exports = router;