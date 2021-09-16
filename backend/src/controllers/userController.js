const User = require('../models/User')
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const { userValidator , options } = require('../../validator/userValidator')

const ADMIN_EMAIL = process.env.ADMIN_EMAIL
const adminArr = ADMIN_EMAIL.split(',')

const signUpPostController = async (req,res)=>{
    try{
        const { error, value }= userValidator.validate(req.body)
        if(error){
            res.status(500).json({
                result: value,
                message: 'validation error',
                Error: error.details[0].message
            })
        }else{
            const{ email } = req.body
           let user = await User.findOne({email}).lean()// check for  previous user 
            if(!user){  
                // check for admin email to save admin     
            // const isAdminEmail = adminArr.find(val => val === email)
            const isAdminEmail = adminArr.includes( email )
            if( !isAdminEmail){ // for user registration
                const user = new User(req.body)
                await user.save()
            res.status(200).json({  
                message: 'User saved successfully'
                })
            }else{ // for admin registration
                const user = new User({...req.body, userType:"admin"})
                await user.save()
                res.status(200).json({
                message: 'Admin saved successfully'
                })
            }
        //  after creating user must redirect to login page last of try part
        }else{
            res.status(500).json({
                message : "This email already taken",
            })
        }
      }
    }catch(err){
        console.log("mongoose error" +err)
        res.status(500).json({
            message : "server error create user",
            err
        })
    }
}

const userDeleteController = async (req ,res)=>{  //delete temporary  by own
    try{
        const data = await User.findByIdAndUpdate(
            {_id:req.params.id},
            { $set:{
                isDeleted : true
                }
            }
            )
            res.status(200).json({
                result : data
            })

    }catch(err){
        res.status(500).json({
            message : "server error sd",
            err
        })
    }
}

const updateUserInfoController = async (req,res)=>{
    try{
        const { error, value }= userValidator.validate(req.body)
        if(error){
            res.status(500).json({
                result: value,
                message: 'validation error',
                Error: error.details[0].message
            })
        }else{
        await User.findByIdAndUpdate(
            { _id : req.params.id },

            { $set: req.body }, 
            { multi : true }
            )
        
        res.status(200).json({
            message: 'users data updated successfully ',
            updatedResult: req.body // show new data (req.body)
        })
    }
    }catch(err){
        console.log(err)
        res.status(500).json({
            message : "server error from user update",
            err
        })
    }
}


const userProfileViewController = async (req ,res)=>{
    try{
        const user = await User.findById(
            {_id:req.params.id})

            res.status(200).json({
                result : user
            })

    }catch(err){
        res.status(500).json({
            message : "server error pv",
            err
        })
    }
}

module.exports = { 
    signUpPostController,
    userDeleteController, // by own
    updateUserInfoController,
    userProfileViewController,

            }