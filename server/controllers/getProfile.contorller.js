const User = require("../models/User")

async function getProfile(req, res){
    const userID = req.session.userID
    const user = await User.findOne({_id:userID})
    res.status(200).send(user)
}


module.exports = getProfile