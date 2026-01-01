const userModel = require('../../../models/userModel');

const mainAccountPage = async (req, res) => {
    // let {id} = req.params;
    let user = await userModel.findById(req.user._id);
    res.render('my-accounts', {user});
}

module.exports = mainAccountPage;