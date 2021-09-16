        
const express = require("express")
const route = express.Router()
const fileuploader = require("../../middleware/fileUploader") // file uploader  
// const imgUpload = require("../../middleware/imageUpload") //image upload middleware  
const Auth = require("../../middleware/auth")  //auth middleware
const { permission } = require("../../middleware/permission")  


const {
    loginPostController,
    logoutController,

    forgotPasswordController,
    updatePasswordController,

    viewOwnProfileController,
    updateProfilePictureController,

        } = require("../controllers/commonUserController") 

// route.get("/login", loginGetController)   
route.post("/login", loginPostController)
route.get("/logout", logoutController) 

route.post("/forgotpassword", Auth, forgotPasswordController) // Auth,permission(["admin","user"]),
route.put("/update/password/", Auth, updatePasswordController) // Auth,permission(["admin","user"]),

route.put("/update/profilePicture", fileuploader.single("image") ,updateProfilePictureController)
route.get("/profile/view", Auth, permission(["admin","user"]), viewOwnProfileController) //!!problem

module.exports = route