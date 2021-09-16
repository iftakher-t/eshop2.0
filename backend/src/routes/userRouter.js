   
const express = require("express")
const router = express.Router() 
const Auth = require("../../middleware/auth")  //auth middleware
const {permission} = require("../../middleware/permission")  
         
    const {
        signUpPostController,
        userDeleteController,
        updateUserInfoController,
        userProfileViewController,

    } = require('../controllers/userController')

    // route.get('/signup',signUpGetController) // for show signup page

    router.post('/signup', signUpPostController)
    router.delete('/deleteuserown/:id', permission(['admin', 'user']), userDeleteController) // temporary own
    router.put('/update/:id', updateUserInfoController) // permission(['admin', 'user']), 
    router.get('/view/:id',Auth, permission(['admin', 'user']), userProfileViewController) 

module.exports = router