const sellerModel = require("../models/sellerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sellerLogin = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) return res.send("Some fields are missing");
  let checkUser = await sellerModel.findOne({ email });
  if (!checkUser) return res.send("Invalid Email or Password");

  let isExist = await bcrypt.compare(password, checkUser.password);
  if (!isExist) return res.send("Invalid Username or Password");

  const token = jwt.sign(
    { email: checkUser.email, id: checkUser._id },
    "hjfkahefejhef",
    { expiresIn: "7d" }
  );
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.redirect('/seller/admin')
};

module.exports = sellerLogin;
