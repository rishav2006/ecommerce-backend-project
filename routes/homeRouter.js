const express = require('express');
const router = express.Router();
const homePage = require('../controllers/homePage');
const userAuth = require('../middlewares/userAuth');

router.get('/', userAuth, homePage);

module.exports = router;