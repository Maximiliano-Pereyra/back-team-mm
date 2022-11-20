const validatorCity = (schema) => [
  (req, res, next) => {
    const data = schema.validate(req.body, { abortEarly: false });
    if (data.error) {
      return res.json({
        succes: false,
        message: data.error.details,
      });
    }
    next();
  },
];
module.exports = validatorCity;
