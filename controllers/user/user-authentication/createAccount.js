const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../../../models/userModel');

const userCreation = async (req, res) => {
    try{
        let {fullname, email, password} = req.body;
        if(!fullname || !email || !password) return res.send('Enter all the details properly');
        let user = await userModel.findOne({email});
        if(user) return res.send("User Already exists");
        else{
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, async (err, hash) => {
                    if(err) return res.send(err.message);
                    let newUser = await userModel.create({
                        email,
                        fullname,
                        password: hash
                    });
                    const token = jwt.sign({email: newUser.email, id: newUser._id}, 'hsjhdjhehfh', {expiresIn: '7d'});
                    res.cookie("token", token, {
                        httpOnly: true,
                        maxAge: 7 * 24 * 60 * 60 * 1000
                    });
                    res.send('User Created');
                })
            })
        }
    }catch(err){
        res.send(err.message);
    }
}

module.exports = userCreation;