const mongoose=require("mongoose")

const dbConnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/exam")
    console.log("connect to database")
}
module.exports=dbConnect
