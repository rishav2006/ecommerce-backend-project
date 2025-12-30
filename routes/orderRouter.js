const express = require('express');
const router = express.Router();
const orderPage = require('../controllers/orderPage');
const newOrder = require('../controllers/newOrder');
const userAuth = require('../middlewares/userAuth');

router.get('/new/:id', orderPage);

router.post('/new/:id', userAuth, newOrder);

module.exports = router;