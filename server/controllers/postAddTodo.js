const todo = require('../models/Todo')

async function postAddTodo(req, res){
    const {todoItem, todoID} = req.body
    try{
            // const response = await todo.findByIdAndUpdate({_id:todoID},{
            //     $push:{todoLists:todoItem},
            //     },{upsert:true})
            const todoContainer = await todo.findById({_id:todoID})
            todoContainer.todoLists.push({listItem:todoItem})
            const response = await todoContainer.save()
            return res.status(201).send(response)
        }
        
    catch(error){
        return res.status(500).send("Update error")
    }

}

module.exports = postAddTodo