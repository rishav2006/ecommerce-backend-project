const express = require('express');
const router = express.Router();
const homePage = require('../controllers/homePage');

router.get('/', homePage);

module.exports = router;