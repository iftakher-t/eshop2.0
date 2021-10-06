const {Schema, model}= require('mongoose')


const messageSchema = new Schema({
    message:{ type:String, unique:true, trim:true },
    sender:{ 
        type: Schema.Types.ObjectId, 
        ref:'User'
    },
    receiver:{ 
        type: Schema.Types.ObjectId, 
        ref:'User'
    },
    conversationId:{ 
        type: Schema.Types.ObjectId, 
        ref:'Conversation'
    },
    dateTime:{ type:String, default:"" },
    isDeleted:{ type:Boolean, default:false }
    },
{
    timestamps:true
})
 
module.exports = model('Message', messageSchema)
