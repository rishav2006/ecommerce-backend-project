const express = require('express');
const router = express.Router();
const productDetails = require('../controllers/main/productDetails');

router.get('/:id', productDetails);

module.exports = router;