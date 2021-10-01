const {Schema, model}= require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    firstName:{ type:String, default:"" },
    lastName:{ type:String, required : true },
    payment:[{ type:String, default:''}],

    contactNumber:{ type:String, required : true }, //  unique : true, 
    contactEmail:{ type:[String], required : true }, //  unique : true, 
    Birthday: { type:String, default:"" },

    Gender:{ type:String, required : true },
    fatherName:{ type:String,  default:"" },
    motherName:{ type:String,  default:"" },
    fatherContactNumbere:{ type:String,  default:"" },
    motherContactNumbere:{ type:String,  default:"" },

    educationHistory:[{
        organization:{type:String,  default:""}
    }],
    officialInfo:[{
        occupation:{type:String, default:""},
        userType:{ type:String, default:"user" },
        password: { type:String, required : true },
        isActive: { type:String, default : false },
        isDeleted: { type:Boolean, default: false },
    }],

    following: {
        type: Schema.Types.ObjectId,
        ref: 'Following' // we need required  schema
       },
    shopCollection: {
        type: Schema.Types.ObjectId,
        ref: 'Shop' // we need required  schema
       },

    recoveryToken : { Type: String , default :'' },

    ballanceRecord: {
        type: Schema.Types.ObjectId,
        ref: 'Ballace' // we need required  schema
       },
    refundSettlement: {
        type: Schema.Types.ObjectId,
        ref: 'Refund' // we need required  schema
       },
       adminProfile: {
        type: Schema.Types.ObjectId,
        ref: 'Admin' // we need required  schema
       },
       superAdminProfile: {
        type: Schema.Types.ObjectId,
        ref: 'SuperAdmin' // we need required  schema
       },
       ePoint:{ type:String, default:"" },
        
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
