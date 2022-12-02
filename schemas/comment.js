const joi = require("joi");

const schema = joi.object({
  showId: joi.string().required().messages({
    "any.required": "el campo es obligatorio",
  }),
  userId: joi.string().required().messages({
    "any.required": "el campo es obligatorio",
  }),
  date: joi.date().required().messages({
    "any.required": "el campo es obligatorio",
  }),
  comment: joi.string().required().min(10).messages({
    "any.required": "el campo es obligatorio",
    "string.empty": "el campo esta vacio",
  }),
});

module.exports = schema;
