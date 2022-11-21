const joi = require("joi");

const schema = joi.object({
  name: joi.string().required().min(2).max(40),
  continent: joi.string().required().max(20),
  photo: joi.string().required().uri(),
  population: joi.number().required().min(1000),
  userId: joi.string().required(),
});

module.exports = schema;
