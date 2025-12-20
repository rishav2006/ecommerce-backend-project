const sellerModel = require('../models/sellerModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createSellerAccount = async (req, res) => {
    let {fullname, email, password, contact, gstin, address} = req.body;
    if(!fullname || !email || !password || !contact || !gstin || !address) return res.send('Some fields are missing');
    let checkUser = await sellerModel.findOne({email});
    if(checkUser) return res.send('Seller Already Exists');
    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);
    let newSeller = await sellerModel.create({
        fullname,
        email,
        password: hash,
        contact,
        gstin,
        address,
    });
    const token = jwt.sign({email: newSeller.email, id: newSeller._id}, "hjfkahefejhef", {expiresIn: '7d'});
    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.send('Seller Created');
}

module.exports = createSellerAccount;