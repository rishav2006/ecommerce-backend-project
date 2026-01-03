const userModel = require("../../../models/userModel");

const changeAccountDetails = async (req, res) => {
    try{
        let {name, email, address, image, contact} = req.body;
        let id = req.user._id;
        let user = await userModel.findByIdAndUpdate(id, {
            name,
            email,
            address,
            contact,
            image
        }, {new: true});
        res.redirect('/user/account');
    }catch(err){
        res.send("Some error occured");
        console.log(err.message);
    }
}

module.exports = changeAccountDetails;