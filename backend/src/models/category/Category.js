const {Schema, model}= require('mongoose')

const categorySchema = new Schema({
    categoryName:{ type:String, required : true },

    product:{ 
        type:Schema.Types.ObjectId,
        ref: 'Product',
    },
    shop:{ 
        type:Schema.Types.ObjectId,
        ref: 'Shop',
    }
        
},{
    timestamps:true
})

module.exports = model('Category', categorySchema)
