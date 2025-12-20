const express = require("express");
const router = express.Router();
const userCreation = require("../controllers/createAccount");
const userLogin = require('../controllers/loginAccount');
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

module.exports = router;
