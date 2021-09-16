
const Joi = require('joi');

const emailValidator = Joi.object({
    email: Joi.string().trim().required()
        .regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    password:Joi.string().required().pattern(new RegExp ('^[a-zA-Z0-9]{6,30}$'))
})

const options = {
    abortEarly:false,
    allowUnknown:true,
    stripUnknown:true,
}

module.exports = {
    emailValidator, options
}