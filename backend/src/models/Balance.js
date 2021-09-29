const {Schema, model}= require('mongoose')

const ballanceSchema = new Schema({
    accountBallance:{ type: String, trim:true, required:true },
    accountBallanceription:{ type: String, trim:true, required:true },
    accountBallanceure:{ type: String,default:'' },

    shopInfo:{ 
        type:Schema.Types.ObjectId, 
        ref: 'Shop', required:true 
    }

},{timestamps:true})

module.exports = model('Ballance' ,ballanceSchema)
