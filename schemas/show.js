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
    description: joi.string().required().max(45).messages({
        "any.required":"el campo es obligatorio",
        "string.empty":"el campo esta vacio",
    }),
    price:joi.number().required().min(45). max(120).messages({
        "any.required":"el campo es obligatorio",
        "string.empty":"el campo esta vacio",
    }), 
    date: joi.date().required().messages({
        "any.required":"el campo es obligatorio",
    }),
    hotelId: joi.string().required().messages({
        "any.required":"el campo es obligatorio",
    }),
    userId: joi.string().required().messages({
        "any.required":"el campo es obligatorio",
    })
})

module.exports = schema


    
    