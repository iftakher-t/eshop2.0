const {Schema, model}= require('mongoose')
const User = require('./User')

const shopSchema = new Schema({
    shopName:{ type:String, default:"" },
    // shopType:{ type:String, default:"" },
    shopContactNumber:{ type:String, default:"" },
    shopAddress:{ type:String, default:"" },
    ownerNIDImg:{ type:String, default:"" },
    tradeLicense:{ type:String, default:"" },

    shopImg: { type:String, default:"" },
    shopBannerImg: { type:String, default:"" },

    isDeleted: { type:Boolean, default :false},

    product:{ 
        type:[String], default:""
    },

    profile: {
         type: Schema.Types.ObjectId,
         ref: User // we need required Merchant(shop owner) schema
        },
    shopReview:[{ 
            type:Schema.Types.ObjectId, 
            ref: 'User'
        }]
        
},{
    timestamps:true
})

module.exports = model('Shop', shopSchema)
