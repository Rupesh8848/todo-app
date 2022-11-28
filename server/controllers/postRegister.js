const bcrypt = require("bcryptjs")
const User = require("../models/User")

async function postRegister(req, res){
    const {userName, email, password, confirmPassword} = req.body
    if(password !== confirmPassword){
        res.status(400).send("Password and confirm password must match.")
    }
    const userExists = await User.findOne({email})
    if(userExists){
        return res.status(400).send("User already exists with given email.")
    }

    const hashedPassword = await bcrypt.hash(password,12)

    const user = new User({userName,email, password:hashedPassword})
    const response = await user.save()
    console.log(response)
    res.status(201).send(response)

}

module.exports = postRegister