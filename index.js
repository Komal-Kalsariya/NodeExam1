const express=require("express");
const dbConnect = require("./confing/db");
const UserRouter = require("./routes/user.route");
const TaskRouter = require("./routes/task.route");


const app=express()
app.use(express.json())
app.use("/user",UserRouter)
app.use("/task",TaskRouter)
app.listen(8090,()=>{
    console.log("listing localhost 8090");
    dbConnect()
    
})