const {Schema, model}= require('mongoose')

const shopSchema = new Schema({
    shopName:{ type:String, default:"" },
    shopId:{ type:String, default:"" },
    shopcategory:{ type:String, default:"" },
    shopType:{ type:String, default:"" },

    categoryOfProducts: {
        type: Schema.Types.ObjectId,
        ref: 'Category' // we need required schema
       },
    bannerPicture: { type:String, default:"" },
    isExpress: { type:Boolean, default :false},
    isCampaign: { type:Boolean, default :false},

    shopContactNumber:{ type:String, default:"" },
    shopAddress:{ type:String, default:"" },
    ownerNIDImg:{ type:String, default:"" },
    tradeLicense:{ type:String, default:"" },
    shopLocation:{ 
        division:{type:String, default:"" },
        district:{type:String, default:"" },
        country:{type:String, default:"" }
    },

    shopReview:[{ 
            type:Schema.Types.ObjectId, 
            ref: 'Review'
        }],
    totalReview:{ type:String, default:"" }, 
    averageReview:{ type:String, default:"" },
    cashOnDelivery:{ type:String, default:"" },
    tradeLicenceNumber:{ type:String, default:"" },
    tradeLicencePicture:{ type:String, default:"" },
    owner:{ 
        type:Schema.Types.ObjectId,
        ref: 'User',
    },
    follower:{ 
        type:Schema.Types.ObjectId,
        ref: 'Follower',
    },
    latitude:{ type:String, default:"" },
    longitude:{ type:String, default:"" },
    minimumOrderAmount:{ type:String, default:"" },
    campaign:{ 
        type:Schema.Types.ObjectId,
        ref: 'Campaign',
    },
    expressShop:{ 
        type:Schema.Types.ObjectId,
        ref: 'ExpressShop',
    },
    product:{ 
        type:Schema.Types.ObjectId,
        ref: 'Product',
    },

},{

    timestamps:true
})

module.exports = model('Shop', shopSchema)
