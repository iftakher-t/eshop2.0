const {Schema, model}= require('mongoose')

const notificationSchema = new Schema({
    image:{ type:String, default:"" },
    lastName:{ type:String, required : true },

    userType:{ type:String, default:"user" },

    phoneNumber:{ type:String, required : true }, //  unique : true, 
    password: { type:String, required : true },
    Birthday: { type:String, default:"" },

    isDeleted: { type:Boolean, default :false},
        
},{
    timestamps:true
})

module.exports = model('Notification', notificationSchema)
