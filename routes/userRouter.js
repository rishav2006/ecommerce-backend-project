const express = require("express");
const router = express.Router();
const userAuth = require('../middlewares/userAuth');
const userCreation = require("../controllers/user/user-authentication/createAccount");
const userLogin = require('../controllers/user/user-authentication/loginAccount');
const accountPage = require('../controllers/user/user-pages/accountPage');
const userOrders = require('../controllers/user/user-pages/userOrder');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

router.get("/create", (req, res) => {
  res.render("signup");
});

router.post("/create", userCreation);

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", userLogin);

router.get('/account', userAuth, accountPage);

router.get("/account/my-orders/:id", userAuth, userOrders);

module.exports = router;
