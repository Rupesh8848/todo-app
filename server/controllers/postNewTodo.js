const todoSchema = require("../models/Todo")
const Joi = require("joi")
const validator = require("express-joi-validation")

// const todoJoiSchema = Joi.object({
//     topic:Joi.string().required(),

// })


async function postNewTodo(req, res){
    const userID = req.session.userID
    const {topic,listItem} = req.body
    var todo = new todoSchema({
        userID:userID,
        topic:topic,
        todoLists:[{listItem}],
    })
   
    try {
        const response = await todo.save()
        return res.status(201).send(response)
    } catch (error) {
        return res.status(400).send(error)
    }
    
}


module.exports = postNewTodo