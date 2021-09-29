const {Schema, model}= require('mongoose')

const officialSchema = new Schema({
    contactNumber:{ type:String, required : true  },
    contactEmail:{ type:String, required : true  },
    companyLogo:{ type:String, required : true  },
    categoryName:{ type:String, required : true  },

    totalShop:{ type:String, default:"" },
    totalSells:[{
        type: Schema.Types.ObjectId,
        ref: 'Order', // we need required  schema
       }],

    totalIncome:{ type:String, default:"" },
    
        
},{
    timestamps:true
})
 
module.exports = model('Official', officialSchema)
