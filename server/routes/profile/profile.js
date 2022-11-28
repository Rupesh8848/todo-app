const express = require("express")

const getProfile = require("../../controllers/getProfile.contorller")
const postEdit = require("../../controllers/postEdit.contorller")

const profileRouter = express.Router()

profileRouter.get("/",getProfile)
// profileRouter.get("/edit",)  send edit page
profileRouter.post("/edit",postEdit)


module.exports = profileRouter