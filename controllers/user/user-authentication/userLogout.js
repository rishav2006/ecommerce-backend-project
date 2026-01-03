const userLogout = async (req, res) => {
    res.cookie('token', '');
    res.redirect('/user/login')
};

module.exports = userLogout;