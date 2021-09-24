const {Schema, model}= require('mongoose')
const User = require('./User')

const topUpSchema = new Schema({
    title:{ type:String, default:"" },
    mobileNumber:{ type:String, default:"" },
    operator:{ type:String, required : true },
    subscriptionType:{ type:String, required : true },  
    amount: { type:String, required : true },

    mb: { type:String, default:"" },
    munites: { type:String, default:"" },
    sms: { type:String, default:"" },

    user: {
         type: Schema.Types.ObjectId,
         ref: User // we need required Profile schema
        },
        
},{
    timestamps:true
})

module.exports = model('TopUp', topUpSchema)
