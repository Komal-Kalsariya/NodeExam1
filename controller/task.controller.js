const Task = require("../model/task.schema")

const getTask=async(req,res)=>{
    let data= await Task.find()
    res.send(data)
}

const postTask=async(req,res)=>{
    let data=await Task.create(req.body)
    res.send(data)
}
module.exports={getTask,postTask}