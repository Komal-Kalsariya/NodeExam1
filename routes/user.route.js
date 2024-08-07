const {Router}=require("express")
const {CreateUser, LoginUser } = require("../controller/user.contoller")

const UserRouter=Router()

UserRouter.post("/signup",CreateUser)
UserRouter.post("/login",LoginUser)
// UserRouter.patch("/:id",UpadateData)
// UserRouter.delete("/:id",DeleteData)

module.exports=UserRouter