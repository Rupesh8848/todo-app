const bcrypt = require("bcryptjs")
const User = require("../models/User")


async function postLogin(req, res){
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user){
        return res.status(400).send("User doesn't exist.")
    }
    const verified =await bcrypt.compare(password, user.password)
    if(!verified){
        return res.status(400).send("Password doesn't match.")
    }
    req.session.userID = user._id
    res.send(user)

}


module.exports = postLogin;