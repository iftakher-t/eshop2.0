const {Schema, model}= require('mongoose')
// const User = require('./User')
// const Comment = require('./Comment')

const productReviewSchema = new Schema({
    postTitle:{ 
        type:String, required:true, trim:true, maxlength:50 
    },
    postBody:{ 
        type:String, required:true,
    },
    author:{ 
        type:Schema.Types.ObjectId, ref: 'User', required:true 
    },

    tags:{ 
        type: [String], required:true 
    },
    thumbnail: String,
    readTime: String,

    postlikes:[{
        type:Schema.Types.ObjectId, ref: 'User'
    }],
    postdisLikes:[{
        type:Schema.Types.ObjectId, ref: 'User'
    }],
    postdisLikes:{ type: Boolean, default: 0},
    postcommentsCount:{ type: Boolean, default: 0},
    postcomments:[
        {
            commentType: {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        }
        
        ],

},
{
    timestamps:true
})

module.exports = model('Post', productReviewSchema)
