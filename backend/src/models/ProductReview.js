const {Schema, model}= require('mongoose')
// const User = require('./User')

const productReviewSchema = new Schema({
    reviewTitle:{ 
        type:String, required:true, trim:true, maxlength:50 
    },
    productReviewBody:{ 
        type:String, required:true,
    },
    user:{ 
        type:Schema.Types.ObjectId, ref: 'User', required:true 
    }
    },
{
    timestamps:true
})

module.exports = model('ProductReview', productReviewSchema)
