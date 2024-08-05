const {Router}=require("express")
const { getTask, postTask } = require("../controller/task.controller")


const TaskRouter=Router()

TaskRouter.get("/",getTask)
TaskRouter.post("/",postTask)

module.exports=TaskRouter