const {Schema, model}= require('mongoose')

const productSchema = new Schema({

    productDetails :{
        Name:{ 
            type:String, 
            required:true, 
        },
        Code:{ 
            type:String, 
            required:true
        },
        Model:{ 
            type:String, 
            required:true,
        },
        Image:{ 
            type:String, 
            required:true,
        },
        Color:[{ 
            type:String, required:true,
        }],
        productSize:[{ 
            type:String, required:true,
        }],
    },

    stockInfo:{
        isStock: {
            type: Boolean,
            default: false
        },
        numberOfStock: {
            type: Number,
            default: 0
        }
    },

    price: {
        previousPrice: {
            type: Number,
            default: 0
        },
        currentPrice: {
            type: Number
        }
    },
    othersDetails: {
        freeShipping : {
            type: Boolean,
            default: false
        },
        category: [String],
        tags: [String],
        color: [
            {
                colorName: String,
                stockAvailable: Number
            }
        ],
        isDeleted: {
            type: Boolean,
            default: false
        }
    },

    rattingInfo: {
        totalStar: {
            type: Number,
            default: 0,
            max: 5
        },
        totalReview: {
            type: Number,
            default: 0
        },
        reviewSection: [
            {
                reviewerId: String,
                review: String,
                replySection : [
                    {
                        replierId: String,
                        reply: String,
                        mentionerId: String
                    } 
                ]
            }
        ]
    },

    
    shop :
        { type: Schema.Types.ObjectId,
          ref: 'Shop' // we need required shop schema
        },
},
{
    timestamps:true
})

module.exports = model('Product', productSchema)
