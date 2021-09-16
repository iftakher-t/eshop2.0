
const bcrypt = require("bcrypt")
require("dotenv").config
const jwt = require("jsonwebtoken")
const jwtDecode = require("jwt-decode")
const nodemailer = require("nodemailer")
const fileSystem = require("fs")

const securityKey = process.env.JWT_SECRET //get the security code from .env file
const adminEmailNodemailer = process.env.USER //get the user for nodemailer
const password = process.env.PASSWORD //get the password of auth account's for nodemailer

const {
    passwordValidation:passwordValidation, 
    resetPasswordValidation } = require("../../validator/passwordValidator")
  
const { emailValidator , options } = require('../../validator/emailValidator')

const Profile = require("../models/Profile")
const User = require("../models/User")

// logout
const logoutController = async (req, res, next) => {
    try{
            req.logout();
            req.session.destroy((err) => {
              if (err) console.log('Error : Failed to destroy the session during logout.', err);
              req.user = null;
              res.redirect('/signin');
            });
    
    }catch(err){
        console.log(err);
        res.status(400).json({
            err
        })
    }
}
//login controller 
const loginPostController = async (req, res) => {
    try{
        const { email, password } = req.body
        const {error} = emailValidator.validate(req.body) //check is the password is valid or not ?
        if(error){
            console.log(error)
            res.json({
                message: "email is not valid",
                error
            }) //sent a error message of validation
        }else{
                let isValidUser = await User.findOne({
                    $and: [ { email }, { "isDeleted": false }]
                });

            if( isValidUser ){
                const user = isValidUser //get the user
                const isPasswordMatch = await bcrypt.compare( password, user.password ) //check is the password have been matched or not
                if(isPasswordMatch){
                    const data = {
                        id: user._id,
                        userName: user.firstName,
                        userType: user.userType
                    }//get the data to make it a token

                    const token = jwt.sign( data, securityKey, { expiresIn: "10d" }) //token expire in 10 days
                    res.status(202).json({
                        message: "Successfully login",
                        token
                    })//if password and user email have matched

                }else{
                    res.status(406).json({
                        message: "Password is wrong"
                    })
                }
            }else{
                console.log("You are not registered user");
                res.status(404).json({
                    message: "You are not a valid user"
                })
            }
        }
    }
    catch(err){
        console.log(err);
        res.status(400).json({
            err
        })
    }
}

const updatePasswordController = async (req, res) => {
    try{
        const headerToken = req.header("Authorization") //get the jwt token from header
        const token = jwtDecode(headerToken) //get the token object 
        const id = token.id //get the user id from token of authorization
        const {oldPassword, newPassword, confirmNewPassword} = req.body // get the input
        const {error} = passwordValidation.validate(req.body) //check is the password is valid or not 
        if(error){
            res.json({
                message: "joi validatoin error",
                error
            }) //sent a error message of validation
        }else{
        if(newPassword !== confirmNewPassword){
                res.json({
                    message: "newPassword , confirmNewPassword are not same"
                })
            }else if(newPassword === confirmNewPassword){
            const hashedNewPassword = await bcrypt.hash(newPassword, 11) //hash the new password

                let user = await User.findOne({_id: id}); // find the user , id from token
                    if(user){
                        const isOldPassword = await bcrypt.compare(oldPassword, user.password ) //check is it valid old password or not
                            if(isOldPassword){
                                await User.findByIdAndUpdate({_id: id}, // update user data
                                            { $set: { password: hashedNewPassword } },
                                            {}
                                        )
                                        res.json({
                                                message: "password has been changed successfully"
                                            })
                            }else{
                                res.json({
                                message: "Old password is wrong"
                                })
                            }
                    }else{
                    res.status(404).json({
                        message: "password update failed"
                    })
                }
            }
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            err
        })
    }
}

const forgotPasswordController = async (req, res) => {
    try{
        let recoveryToken //send token to the user email
        let receiverEmail //for receivers email

        const {email} = req.body //get the email from body
        let user = await User.findOne({
                    $and: [ { email }, { "isDeleted": false }]
                });
                
            if(user){
                const { email, _id } = user //get the email , _id from database

                    const tokenData = {
                        id: user._id,
                        useType: user.userType 
                    }//recovery mail token data
                    let token = jwt.sign(tokenData, securityKey, {expiresIn: "55m"}) //store the user id into a token which is valid within 15 min

                    await User.findByIdAndUpdate( { _id  },
                        { recoveryToken: token }, //save the token in db
                        {} //option
                    )
                    receiverEmail = email //store the receiver email 
                    recoveryToken = token 
            }else{
            res.status(404).json({
                "message": "You are not a user"
            })
        }
        
        //nodemailer part 
        const transporter  = nodemailer.createTransport({
            service : "gmail",
            auth:{
                user:adminEmailNodemailer, 
                pass:password
            }
        }) //transporter part

        //mailOption part
        const mailOption = {
            from: '<iftakher.te@gmail.com>', // sender email
            to: receiverEmail, // list of receivers
            subject: "reset password", // Subject line
            html: `<h3>click the link below </h3> 
                    <p>${recoveryToken}</p>`
        }
        //send the mail 
        transporter.sendMail(mailOption, (err, data) => {
            if(err){
                console.log(err);
                res.json({
                    message: "problem to delivered the mail to the sender",
                    err
                }) //if there have some error during the email send
            }
            res.status(200).json({
                message: `message has been successfully send to ${receiverEmail}`
            })
        }) //send the mail here
    }
    catch(err){
        console.log(err);
        res.json({
            err
        })
    }
}

const forgotPasswordSetController = async (req, res) => {
    try{
        const headerToken = req.header("Authorization") //get the jwt token from header
        const token = jwtDecode(headerToken) //get the token object 
        const id = token.id //get the user id from token of authorization
        const { newPassword, confirmNewPassword} = req.body // get the input
        const {error} = passwordValidation.validate(req.body) //check is the password is valid or not 
        if(error){
            res.json({
                message: "joi validatoin error",
                error
            }) //sent a error message of validation
        }else{
        if(newPassword !== confirmNewPassword){
                res.json({
                    message: "newPassword , confirmNewPassword are not same"
                })
            }else if(newPassword === confirmNewPassword){
            const hashedNewPassword = await bcrypt.hash(newPassword, 11) //hash the new password

                let user = await User.findOne({_id: id}); // find the user , id from token
                    if(user){
                        await User.findByIdAndUpdate({_id: id}, // update user data
                                    { $set: { password: hashedNewPassword } },
                                    {}
                                    )
                                res.json({
                                    message: "password has been changed successfully"
                                    })
                    }else{
                    res.status(404).json({
                        message: "password update failed"
                    })
                }
            }
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json({
            err
        })
    }
}

const viewOwnProfileController = async (req, res) => {
    try{
       const headerToken = req.header("Authorization")  //get the token from body header
       const isValidToken = jwt.verify(headerToken, securityKey) //check is it a valid token or not
       if(isValidToken){
            const tokenData = jwtDecode(headerToken) //decode the token data
            const {id, userType} = tokenData  //take the id and user type from the token

            const user = await User.findOne({ _id: id }) //query and find the user
                if(findUser){
                    const userProfile = user
                    res.json({
                        message: "user found",
                        userProfile
                    })
                }

        }else{
            res.json({
                message: "token is invalid"
            })
        }
    }
    catch(err){
        console.log(err);
        res.json({
            err
        })
    }
}

const updateProfilePictureController = async (req, res) => {
    try{
         const token = req.header("Authorization") //get the login token
         const tokenData = jwtDecode(token) 
         const { id } = tokenData //get the userId and firstName from  token

            // let id = req.params.id
            const user = await User.findOne({ _id: id }) //query and find the user

            if(user){ //if it is a valid user

                const OldProPicName = user?.profileImage //get the old profile image name
                const route = `F:/ICT/Ift/blog1collection/public/images/${OldProPicName}` 
                const {filename} = req.file
                
                const insertNewProfilePic = await User.findByIdAndUpdate(
                    { _id: id },
                    { "profileImage" : filename },
                    {}
                ) //if insert new pic successfully
                if(insertNewProfilePic){
                    res.status(202).json({
                        message: `${user?.firstName} ${user?.lastName}'s profile picture has been updated successfully  `
                    })
                     //delete the previous image from folder

                    fileSystem.unlink(route, (err) => {
                            if(err){
                                console.log(err);
                                res.json({
                                    message:"previous image delete error"
                                })
                            }
                    }) 
                }else{
                    res.json({
                        message: "profile picture upload failed"
                    })
                }
            }else{
                res.json({
                    message: "The user is not valid"
                })
            }

    }
    catch(err){
        console.log(err);
        res.json({
            err
        })
    }
}

module.exports = {
    loginPostController, //ok
    logoutController,

    forgotPasswordController,
    forgotPasswordSetController,

    updatePasswordController, //ok

    viewOwnProfileController, //ok
    updateProfilePictureController, //ok

}
