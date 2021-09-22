const {Schema, model}= require('mongoose')
const bcrypt = require('bcrypt')
const Profile = require('./Profile')

const addToCartSchema = new Schema({

    profile: {
         type: Schema.Types.ObjectId,
         ref: Profile // we need required Profile schema
        }
        
},{
    timestamps:true
})
 
module.exports = model('AddToCart', addToCartSchema)
