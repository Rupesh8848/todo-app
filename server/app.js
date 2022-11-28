const express = require("express")
const app = express()
const session = require("express-session")
const cors = require("cors")
const path = require("path")
require("dotenv").config()


const authRouter = require("./routes/auth/auth")
const profileRouter = require("./routes/profile/profile")
const todoRouter = require("./routes/todos/todos")

app.use(cors({origin: "http://localhost:3000"}))
app.use(express.json())


app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,

}))

function userLoggedIn(req, res, next){
    if(!req.session.userID){
        return res.redirect("/auth/user/login")
    }
    next()
}

app.use(express.static(path.join(__dirname,"public")))

app.use("/auth/user",authRouter)
app.use("/user/profile", userLoggedIn ,profileRouter)
app.use("/todos",userLoggedIn,todoRouter)

app.get("/*",(req, res)=>{
    res.status(200).sendFile(path.join(__dirname,"public","index.html"))
})





module.exports = app
