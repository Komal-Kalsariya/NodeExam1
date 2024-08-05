const {Router}=require("express")
const { getData, postData } = require("../controller/user.contoller")

const UserRouter=Router()

UserRouter.get("/",getData)
UserRouter.post("/",postData)

module.exports=UserRouter