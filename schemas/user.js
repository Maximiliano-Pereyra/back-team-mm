const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(2).max(40).messages({
    "string.base": "Enter the name of the City",
    "any.required": "Complete this input",
    "string.empty": "Enter the name of the city",
    "string.min": "The minimum is 2 characters",
    "string.max": "The maximum is 40 characters",
  }),
  lastName: joi.string().required().min(2).max(40).messages({
    "string.base": "Enter the name of the City",
    "any.required": "Complete this input",
    "string.empty": "Enter the name of the city",
    "string.min": "The minimum is 2 characters",
    "string.max": "The maximum is 40 characters",
  }),
  role: joi.string().valid("user", "admin"),
  photo: joi.string().required().uri().messages({
    "any.required": "Complete this input",
    "string.empty": "Enter the photo URL",
  }),
  age: joi.number().required().min(18).messages({
    "number.base": "Enter your age",
    "number.empty": "Complete this input with your age",
  }),
  email: joi.string().required().email({ minDomainSegments: 2 }).messages({
    "any.required": "Enter your email",
    "string.empty": "Enter your email",
    "string.email": "Enter your email",
  }),
  password: joi.string().required().messages({
    "any.required": "Complete this input",
    "string.empty": "Enter your password",
  }),
});

module.exports = schema;
