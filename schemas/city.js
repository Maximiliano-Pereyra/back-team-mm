const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(2).max(40).messages({
    "string.base": "Enter the name of the City",
    "any.required": "Complete this input",
    "string.empty": "Enter the name of the city",
    "string.min": "The minimum is 2 characters",
    "string.max": "The maximum is 40 characters",
  }),
  continent: joi.string().required().max(10).messages({
    "string.base": "Enter the name of the Continent",
    "any.required": "Complete this input",
    "string.empty": "Enter the name of the continent",
    "string.max": "The maximum is 10 characters",
  }),
  photo: joi.string().required().uri().messages({
    "any.required": "Complete this input",
    "string.empty": "Enter the photo URL",
  }),
  population: joi.number().required().min(1000).messages({
    "number.base": "Enter the number of population",
    "number.empty": "Complete this input with number of population",
  }),
  userId: joi.any(),
});

module.exports = schema;
