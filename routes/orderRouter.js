const express = require('express');
const router = express.Router();
const orderPage = require('../controllers/user/user-pages/orderPage');
const newOrder = require('../controllers/user/user-pages/newOrder');
const userModel = require('../models/userModel');
const productModel = require('../models/productSchema');
const userAuth = require('../middlewares/userAuth');

router.get('/new/:id', orderPage);

router.post('/new/:id', userAuth, newOrder);

module.exports = router;