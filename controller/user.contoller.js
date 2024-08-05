const User = require("../model/user.schema")

const getData=async(req,res)=>{
    let data= await User.find()
    res.send(data)
}

const postData=async(req,res)=>{
    let data=await User.create(req.body)
    res.send(data)
}
const UpadateData=async(req,res)=>{
    let {id}=req.params
    let data=await User.findByIdAndUpdate(id,req.body)
    res.send(data)
}
const DeleteData=async(req,res)=>{
    let {id}=req.params
    let data=await User.findByIdAndDelete(id)
    res.send(data)
}
module.exports={getData,postData,UpadateData,DeleteData}