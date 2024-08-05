const {Router}=require("express")
const { getData, postData, UpadateData, DeleteData } = require("../controller/user.contoller")

const UserRouter=Router()

UserRouter.get("/",getData)
UserRouter.post("/",postData)
UserRouter.patch("/:id",UpadateData)
UserRouter.delete("/:id",DeleteData)

module.exports=UserRouter