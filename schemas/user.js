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
  role: joi.string().required().max(10).messages({
    "string.base": "Enter the name of the Role",
    "any.required": "Complete this input",
    "string.empty": "Enter the name of the role",
    "string.max": "The maximum is 10 characters",
  }),
  photo: joi.string().required().uri().messages({
    "any.required": "Complete this input",
    "string.empty": "Enter the photo URL",
  }),
  age: joi.number().required().min(1000).messages({
    "number.base": "Enter your age",
    "number.empty": "Complete this input with your age",
  }),
  email: joi.string().required().max(40).messages({
    "string.base": "Enter your Email",
    "any.required": "Complete this input",
    "string.empty": "Enter your email",
    "string.max": "The maximum is 40 characters",
  }),
  password: joi.string().required().max(20).messages({
    "string.base": "Enter your Password",
    "any.required": "Complete this input",
    "string.empty": "Enter your password",
    "string.max": "The maximum is 20 characters",
  }),
  code: joi.any(),
  verified: joi.any(),
  logged: joi.any()
});

module.exports = schema;
