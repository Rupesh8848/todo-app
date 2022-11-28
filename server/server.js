const http = require("http")
const app = require("./app")
require("dotenv").config()
const mongoose = require("mongoose")
const PORT = process.env.PORT

const server = http.createServer(app)
mongoose.connect(process.env.MONGO_URI,()=>console.log("Connection to database successful."))


server.listen(PORT,()=>console.log(`Server listening on port: ${PORT}`))