function getLogout(req, res){
    req.session.userID = null
    req.session.destroy()
    res.redirect("/")
}

module.exports = getLogout