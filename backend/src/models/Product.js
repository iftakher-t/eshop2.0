const {Schema, model}= require('mongoose')

const productSchema = new Schema({
    productTitle:{ 
        type:String, required:true, trim:true, maxlength:50 
    },
    productModel:{ 
        type:String, required:true,
    },
    productPrice:{ 
        type:String, required:true,
    },
    productDiscountPrice:{ 
        type:String, required:true,
    },
    productColor:{ 
        type:[String], required:true,
    },
    productSize:{ 
        type:[String], required:true,
    },

    tags:{ 
        type: [String], required:true 
    },
    shop :
        { type: Schema.Types.ObjectId,
          ref: 'Shop' // we need required Post schema
        },
    productReview:[{ 
            type:Schema.Types.ObjectId, 
            ref: 'ProductReview'
        }]

},
{
    timestamps:true
})

module.exports = model('Product', productSchema)
