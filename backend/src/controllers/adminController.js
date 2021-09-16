
const User = require('../models/User')

const allUserGetController = async (req,res)=>{
    try{
        const user = await User.find()
        if(user.length){
            res.status(200).json({
                result: user 
            })
        }else{
            res.status(200).json({
                message: 'No user yet'
            })
        }
    }catch(err){
        console.log(err),
        res.status(500).json({
            message : "server error from all user",
            err
        })
    }
}

const inactiveUserGetController = async (req,res)=>{
    try{
        const user = await User.find({isDeleted : true})
        if(user.length){
            res.status(200).json({
                result: user 
            })
        }else{
            res.status(200).json({
                message: 'No inactiveUser yet'
            })
        }
    }catch(err){
        console.log(err),
        res.status(500).json({
            message : "server error from all user",
            err
        })
    }
}

const userDeleteController = async (req ,res)=>{  //delete temporary
    try{
        const data = await User.findOne(
            {_id:req.params.id},
            set({isDeleted : true})
            )
            res.status(200).json({
                message : 'user deleted successfully',
                result : data
            })

    }catch(err){
        res.status(500).json({
            message : "server error user delete",
            err
        })
    }
}

const userDeletePermanentController = async (req ,res)=>{  //delete permanent
    try{
        let id = req.params.id 
        const data = await User.findOne({_id: id})
        const name = data.firstName + " " + data.lastName

        await User.deleteOne({_id: id})

            res.status(200).json({
                message : ` ${name} is deleted successfully `
            })
 
    }catch(err){
        console.log(err)
        res.status(500).json({
            message : "server error user delete",
            err
        })
    }
}

module.exports = {
    allUserGetController,
    inactiveUserGetController,
    userDeleteController,
    userDeletePermanentController
}
