const userModel = require('../models/userModel');

const mainAccountPage = async (req, res) => {
    let {id} = req.params;
    let user = await userModel.findById(id);
    res.render('my-accounts', {user});
}

module.exports = mainAccountPage;