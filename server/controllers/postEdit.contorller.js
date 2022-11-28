const User = require("../models/User")

async function postEdit(req, res){
    const {userName} = req.body
    const userID = req.session.userID

    const response = await User.findByIdAndUpdate(userID,{userName})
    res.status(200).send(response)


}

module.exports = postEdit