//requiero el metodo de enrutamiento del modulo de express
let router = require('express').Router()

//requiero las rutas de cada modelo a controlar
let user = require('./user')//ubicacion rutas user
let city = require('./city')
let itinerary = require('./itinerary')

//obligo al enrutador principal que use la palabra user para controlar las rutas de user
router.use('/user',user)
router.use('/city',city)
router.use('/itinerary',itinerary)

module.exports = router;
