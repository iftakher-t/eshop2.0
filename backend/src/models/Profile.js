const {Schema, model}= require('mongoose')


const profileSchema = new Schema({
    user:{ 
        type: Schema.Types.ObjectId, 
        ref:'User', // we need required User schema
        required:true
    },
    title:{ type:String, unique:true, trim:true },
    bio:{ type:String, trim:true, maxlength:400 },
    gender: String,
    profileImage: {type:String, default:""},
    links:{ 
        website : String, facebook : String, twitter : String, 
        github : String },

    posts :[ 
        { type: Schema.Types.ObjectId,
          ref: 'Post' // we need required Post schema
        }
    ],
    bookMarks :[ 
        { type: Schema.Types.ObjectId,
          ref: 'Post' // we need required Post schema
        }
    ],
    redMark : { String , default :'' }, // for bad conduct
    },
{
    timestamps:true
})
 
module.exports = model('Profile', profileSchema)
