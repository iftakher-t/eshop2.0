const {Schema, model}= require('mongoose')
// const User = require('./User')

const shopReviewSchema = new Schema({
    reviewTitle:{ 
        type:String, required:true, trim:true, maxlength:50 
    },
    shopReviewBody:{ 
        type:String, required:true,
    },
    user:{ 
        type:Schema.Types.ObjectId, ref: 'User', required:true 
    }
    },
{
    timestamps:true
})

module.exports = model('ShopReview', shopReviewSchema)
