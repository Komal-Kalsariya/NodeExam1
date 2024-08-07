const User = require("../model/user.schema")

const CreateUser=async(req,res)=>{
    

    let {email}=req.body
    let isUser=await User.findOne({email:email})

    if(isUser){
        res.send({message:"user aleary exits"})
    }
    else{
        let data=await User.create(req.body)
        res.send(data)
    }

}

const LoginUser=async(req,res)=>{


    let {email,password}=req.body
    let isUser=await User.findOne({email:email})

    if(!isUser){
        return res.send({message:"not found"})
    }
    if(isUser.password !== password){
        return res.send({message:"password incorrect"})

    }
    res.send({message:"login successfully...."})

}

// const getData=async(req,res)=>{
//     let data= await User.find()
//     res.send(data)
// }

// const postData=async(req,res)=>{
//     let data=await User.create(req.body)
//     res.send(data)
// }
// const UpadateData=async(req,res)=>{
//     let {id}=req.params
//     let data=await User.findByIdAndUpdate(id,req.body)
//     res.send(data)
// }
// const DeleteData=async(req,res)=>{
//     let {id}=req.params
//     let data=await User.findByIdAndDelete(id)
//     res.send(data)
// }
module.exports={CreateUser,LoginUser}