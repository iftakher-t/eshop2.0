const {Schema, model}= require('mongoose')

const commentSchema = new Schema({
    commentBody:{ type: String, trim:true, required:true },

    user:{ 
        type:Schema.Types.ObjectId, ref: 'User', required:true 
    },
    replies:[
        { 
            body:{
            type: String, required:true 
            },
            user:{ 
                type:Schema.Types.ObjectId, ref: 'User', required:true 
            },
            createdAt:{ 
                type: Date, default: new Date()}
        }
    ]

},{timestamps:true})

module.exports = model('Comment',commentSchema)
