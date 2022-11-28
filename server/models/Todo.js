const mongoose = require("mongoose")

const todoListSchema = new mongoose.Schema({
    
})


const todoSchema = new mongoose.Schema({
    userID:{
        type:String,
        required:true,
    },
    topic:{
        type:String,
        required:true,
    },
    todoLists:[{
        listItem:{
            type:String,
            required: true,
        },
        dataAdded:{
            type:Date,
            default:Date.now,
        }
    }]
})

module.exports = mongoose.model("todo-list",todoSchema)