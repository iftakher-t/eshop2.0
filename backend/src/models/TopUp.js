const {Schema, model}= require('mongoose')
const Profile = require('./Profile')

const topUpSchema = new Schema({
    mobileNumber:{ type:String, default:"" },
    operator:{ type:String, required : true },
    subscriptionType:{ type:String, required : true },  
    amount: { type:String, required : true },

    mb: { type:String, default:"" },
    munites: { type:String, default:"" },
    sms: { type:String, default:"" },

    profile: {
         type: Schema.Types.ObjectId,
         ref: Profile // we need required Profile schema
        },
        
},{
    timestamps:true
})

module.exports = model('TopUp', topUpSchema)
