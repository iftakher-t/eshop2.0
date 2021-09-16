const { getMaxListeners } = require("../models/User")
const User = require("../models/User")


















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

        const {name, email, password}= req.body
        User.findOne({email}).exec((err, user)=>{
            if(user){
                return res.status(400).json({error:"The email already used "})
            }

            const token = jwt.sign({name, email, password}, process.env.JWT_ACC_ACTIVATE, {expiresIn:'20m'})
            const data = {
                from: 'iftakher.te@gmail.com',
                to:email, subject:'Account activation link',
                html:`
                <h2> Please click the given link to activate your account</h2>
                <p>${process.env.CLIENT_EMAIL}</p>
                `
                }

                mg.message().send(data, function(err,body) {
                    if (err) {
                        return res.status(400).json({
                            error: err.message
                        })
                    }
                })
        })

        }
         //after creating user must redirect to login page last of try part
    }catch(err){
        console.log(err)
        res.status(500).json({
            message : "server error create user",
            err
        })
    }
}

const activateAccountPostController = async (req,res)=>{
    try{
        const {token} = req.body
        if(token){
        jwt.verify(token, process.env.JWT_ACC_ACTIVATE, (err,decodedToken)=>{
            if(err){
                return res.status(400).json({error: 'IncorrectToken or Expired link'})
            }
            const{name, email, password}= decodedToken
            User.findOne({email}).exec((err, user)=>{
                if(user){
                    return res.status(400).json({error:"The email already used "})
                }
                const newUser = new User(req.body)
                await newUser.save()

            res.status(200).json({
                message: 'User saved successfully'
            })
            })
        })
        }else{
            return res.json({error:'Something went wrong'})
        }
            }catch(err){
                console.log(err)
                res.status(500).json({
                    message : "server error create user",
                    err
                })
            }
        }


