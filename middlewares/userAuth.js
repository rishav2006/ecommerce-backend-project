const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

module.exports = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return res.redirect('/user/login');
    try{
        let decoded = await jwt.verify(token, 'hsjhdjhehfh');
        let user = await userModel.findOne({email: decoded.email});
        if(!user) return res.redirect('/user/login');
        req.user = user;
        next();
    }catch(err){
        console.log(err.message);
        res.redirect('/user/login');
    }
};