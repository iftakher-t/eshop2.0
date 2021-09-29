const {Schema, model}= require('mongoose')

const postSchema = new Schema({
    image:{ type:String, default:"" },
    lastName:{ type:String, required : true },

    user:[{ 
        type:Schema.Types.ObjectId,
        ref: 'User'
    }]
        
},{
    timestamps:true
})

module.exports = model('Post', postSchema)
