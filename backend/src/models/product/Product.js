const {Schema, model}= require('mongoose')

const productSchema = new Schema({
    productName:{ 
        type:String, required:true, trim:true, maxlength:50 
    },
    productCode:{ 
        type:String, required:true, trim:true
    },
    productModel:{ 
        type:String, required:true,
    },
    stockInfo:{ 
        type:String,
    },
    currentPrice:{ 
        type:String, required:true,
    },
    previousPrice:{ 
        type:String, required:true,
    },

    productImage:{ 
        type:String, required:true,
    },
    productColor:{ 
        type:[String], required:true,
    },
    productSize:{ 
        type:[String], required:true,
    },
    subCategory:{ 
        type:[String], required:true,
    },
    tags:{ 
        type: [String], required:true,
    },
    brand:{ 
        type: [String], required:true,
    },
    productDetails:{ 
        type:[String], required:true,
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
