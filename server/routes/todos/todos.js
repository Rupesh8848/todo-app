const express = require("express")
const todoRouter = express.Router()

const postNewTodo = require("../../controllers/postNewTodo")
const postAddTodo = require("../../controllers/postAddTodo")

todoRouter.post("/new/todo",postNewTodo)
todoRouter.post("/add/todo",postAddTodo)

module.exports = todoRouter