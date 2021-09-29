const {Schema, model}= require('mongoose')
const bcrypt = require('bcrypt')
const Profile = require('./Profile')

const userSchema = new Schema({
    firstName:{ type:String, required : true  },
    lastName:{ type:String, default:"" },

    userType:{ type:String, default:"user" },

    phoneNumber:{ type:String, required : true }, //  unique : true, 
    password: { type:String, required : true },
    profileImage: { type:String, default:"" },
    Birthday: { type:String, default:"" },

    isDeleted: { type:Boolean, default :false},

    profile: {
         type: Schema.Types.ObjectId,
         ref: Profile // we need required Profile schema
        },

    resetLink : { String , default :'' },
        
},{
    timestamps:true
})

    userSchema.pre('save', function(next){
        var user = this;
            if(this.isModified('password') || this.isNew){
                bcrypt.genSalt(10, function(err, salt){
                    if(err){
                        return next(err)
                    }
                    bcrypt.hash(user.password, salt , function(err,hash){
                        if(err){
                            return next(err)
                        }
                        if(hash){
                            user.password = hash
                        }
                        next()
                    })
                })
            }else{
                next()
            }
}) 

module.exports = model('User', userSchema)
