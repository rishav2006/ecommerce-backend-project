const jwt = require('jsonwebtoken');
const sellerModel = require('../models/sellerModel');

module.exports = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return res.redirect('/seller/login');
    try{
        let decoded = await jwt.verify(token, 'hjfkahefejhef');
        let seller = await sellerModel.findOne({email: decoded.email});
        if(!seller) return res.redirect('/seller/login');
        req.seller = seller;
        next();
    }catch(err){
        console.log(err.message);
        res.redirect('/seller/login');
    }
};