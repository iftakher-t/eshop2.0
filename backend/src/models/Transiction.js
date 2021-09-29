const {Schema, model}= require('mongoose')

const transictionSchema = new Schema({
    transictionType:{ 
        type:String, required:true
    },
    amountAdded:{ 
        type:String, required:true,
    },
    user:{ 
        type:Schema.Types.ObjectId,
        ref: 'User'
    }
    },
{
    timestamps:true
})

module.exports = model('Transiction', transictionSchema)
