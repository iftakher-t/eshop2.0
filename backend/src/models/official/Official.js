const {Schema, model}= require('mongoose')

const officialSchema = new Schema({
    contactNumber:{ type:String, required : true  },
    contactEmail:{ type:String, required : true  },
    companyLogo:{ type:String, required : true  },


    appoint:{
        appointmentCategory:{ type:String, required : true  },
        appointmentTimeSlot:{ type:String, required : true  },
    },

    categoryName:[{
        type: Schema.Types.ObjectId,
        ref: 'Category', // we need required  schema
       }],

    epoint:{
        epointCategoryName:{ type:String, required : true  },
        pointRangeStart:{ type:String, default:"" },
        pointRangeEnd:{ type:String, default:"" },
        description:{ type:String, default:"" },
    },

    setPoint:{
        pointamount:{ type:String, default:"" },
        setThePointAccordingToTheShopCategory:[{ type:String, default:"" }],
    },

    officialDetails:{
        totalShop:{ type:String, default:"" },
        totalIncome:{ type:String, default:"" },
        totalSell:{
            type: Schema.Types.ObjectId,
            ref: 'Order', // we need required  schema
           }
    }
        
},{
    timestamps:true
})
 
module.exports = model('Official', officialSchema)
