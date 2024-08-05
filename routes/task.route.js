const {Router}=require("express")
const { getTask, postTask, UpadateTask, DeleteTask } = require("../controller/task.controller")


const TaskRouter=Router()

TaskRouter.get("/",getTask)
TaskRouter.post("/",postTask)
TaskRouter.patch("/:id",UpadateTask)
TaskRouter.delete("/:id",DeleteTask)

module.exports=TaskRouter