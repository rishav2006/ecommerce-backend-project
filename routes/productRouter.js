const express = require('express');
const router = express.Router();
const productDetails = require('../controllers/productDetails');

router.get('/:id', productDetails);

module.exports = router;