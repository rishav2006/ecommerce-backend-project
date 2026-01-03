const userModel = require("../../../models/userModel");

const getAccountDetails = async (req, res) => {
    let user = await userModel.findById(req.user._id);
    res.render('my-account-change', {user});
}

module.exports = getAccountDetails;