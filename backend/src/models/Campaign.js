const {Schema, model}= require('mongoose')

const campaignSchema = new Schema({
    campaignName:{ type: String, trim:true, required:true },
    campaignDescription:{ type: String, trim:true, required:true },
    campaignPicture:{ type: String,default:'' },

    shopInfo:{ 
        type:Schema.Types.ObjectId, 
        ref: 'Shop', required:true 
    }

},{timestamps:true})

module.exports = model('Campaign',campaignSchema)
