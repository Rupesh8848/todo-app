const express = require("express")
const authRouter = express.Router()
const Joi = require("joi")
const validator = require("express-joi-validation").createValidator({})


const postRegister = require("../../controllers/postRegister")
const postLogin = require("../../controllers/postLogin")
const getLogout = require("../../controllers/getLogout")

const validateRegister = Joi.object({
    userName: Joi.string().required(),
    email: Joi.string().email().required(),
    password:Joi.string().required(),
    confirmPassword: Joi.string().required()
})

const validateLogin = Joi.object({
    email: Joi.string().required(),
    password:Joi.string().required()
})

authRouter.post("/register",validator.body(validateRegister),postRegister)
authRouter.post("/login",validator.body(validateLogin),postLogin)
authRouter.get("/logout",getLogout)


module.exports = authRouter