const {Schema, model}= require('mongoose')

const reviewSchema = new Schema({
    body:{ type:String, default:"" },
    
    user:[{ 
        type:Schema.Types.ObjectId,
        ref: 'User'
    }]

        
},{
    timestamps:true
})

module.exports = model('User', reviewSchema)
