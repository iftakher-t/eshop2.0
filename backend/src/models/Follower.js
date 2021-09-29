const {Schema, model}= require('mongoose')

const followerSchema = new Schema({
    firstName:{ type:String, required : true  },
    lastName:{ type:String, default:"" },

    followerType:{ type:String, default:"follower" },

    phoneNumber:{ type:String, required : true }, //  unique : true, 
    password: { type:String, required : true },
    profileImage: { type:String, default:"" },
    Birthday: { type:String, default:"" },

    isDeleted: { type:Boolean, default :false},

    user: {
         type: Schema.Types.ObjectId,
         ref: 'User' // we need required Profile schema
        },

    resetLink : { String , default :'' },
        
},{
    timestamps:true
})

module.exports = model('Follower', followerSchema)
