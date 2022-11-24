const validatorCity = (schema) => [
  (req, res, next) => {
    const data = schema.validate(req.body, { abortEarly: false }); // es un objeto que valida todos los campos juntos y devuelve un array conntodos los errores de validacion
    if (data.error) {
      return res.status(200).json({
        succes: false,
        message: data.error.details.map((error) => error.message),
      });
    }
    next();
  },
];
module.exports = validatorCity;
