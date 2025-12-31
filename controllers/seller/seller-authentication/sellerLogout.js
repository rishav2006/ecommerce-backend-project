const sellerLogout = (req, res) => {
    res.cookie("token", '');
    res.redirect('/seller/login');
}

module.exports = sellerLogout;