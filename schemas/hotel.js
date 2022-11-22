const joi = require('joi')

const schema = joi.object({
    name: joi.string().required().max(30)
    .messages({
        "any.required":"el campo es obligatorio",
        "string.base":"ingrese palabras validas",
        "string.empty":"el campo esta vacio",
        "string.max":"el maximo de caracteres es de 30"
    }),
    photo: joi.string().required().uri().messages({
        "any.required":"el campo es obligatorio",
        "string.empty":"el campo esta vacio",
    }),
    capacity:joi.number().required().min(300).messages({
        "any.required":"el campo es obligatorio",
        "string.empty":"el campo esta vacio",
    }), 
    cityId: joi.string().required().messages({
        "any.required":"el campo es obligatorio",
    }),
    userId: joi.string().required().messages({
        "any.required":"el campo es obligatorio",
    }),
})

module.exports = schema