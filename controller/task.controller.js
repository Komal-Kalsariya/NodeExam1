const Task = require("../model/task.schema")

const getTask=async(req,res)=>{
    let data= await Task.find()
    res.send(data)
}

const postTask=async(req,res)=>{
    let data=await Task.create(req.body)
    res.send(data)
}
const UpadateTask=async(req,res)=>{
    let {id}=req.params
    let data=await Task.findByIdAndUpdate(id,req.body)
    res.send(data)
}
const DeleteTask=async(req,res)=>{
    let {id}=req.params
    let data=await Task.findByIdAndDelete(id)
    res.send(data)
}
module.exports={getTask,postTask,UpadateTask,DeleteTask}