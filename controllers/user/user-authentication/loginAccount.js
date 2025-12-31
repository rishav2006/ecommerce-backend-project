const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require('../../../models/userModel');

const userLogin = async (req, res) => {
  try {
    let { email, password } = req.body;

    if(!email || !password) return res.send('Enter all the details properly');
    let checkUser = await userModel.findOne({ email });
    if (!checkUser) return res.send("Invalid Email or Password");

    let isUserPresent = await bcrypt.compare(password, checkUser.password);

    if (!isUserPresent) return res.send("Invalid Email or Password");

    let token = jwt.sign(
      { email: checkUser.email, id: checkUser._id },
      "hsjhdjhehfh",
      { expiresIn: "7d" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.send("Login Successful");

  } catch (err) {
    res.send(err.message);
  }
};

module.exports = userLogin;
