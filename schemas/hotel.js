const joi = require('joi')

const schema = joi.object({
    name: joi.string().required().max(30)
    .messages({
        "any.required":"el campo es obligatorio",
        "string.base":"ingrese palabras validas",
        "string.empty":"el campo esta vacio",
        "string.max":"el maximo de caracteres es de 30"
    }),
    photo: joi.string().required()/* .uri() */,
    capacity:joi.number().required().min(300), 
    cityId: joi.string().required(),
    userId: joi.string().required(),
})

module.exports = schema