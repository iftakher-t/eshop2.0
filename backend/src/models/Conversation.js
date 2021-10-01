const {Schema, model}= require('mongoose')

const conversationSchema = new Schema({
    createdBy:{ 
        type:Schema.Types.ObjectId,
        ref: 'User'
    },
    participant:{ 
        type:Schema.Types.ObjectId,
        ref: 'User',
    },
    message:{ 
        type:Schema.Types.ObjectId,
        ref: 'Message',
    },
    shop:{ 
        type:Schema.Types.ObjectId,
        ref: 'Shop',
    }
        
},{
    timestamps:true
})

module.exports = model('Conversation', conversationSchema)
