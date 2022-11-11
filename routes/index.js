//requiero el metodo de enrutamiento del modulo de express
let router = require('express').Router()

//requiero las rutas de cada modelo a controlar
let user = require('./user')//ubicacion rutas user

//obligo al enrutador principal que use la palabra user para controlar las rutas de user
router.use('/user',user)

module.exports = router;
