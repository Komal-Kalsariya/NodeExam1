const User = require("../model/user.schema")

const getData=async(req,res)=>{
    let data= await User.find()
    res.send(data)
}

const postData=async(req,res)=>{
    let data=await User.create(req.body)
    res.send(data)
}
module.exports={getData,postData}