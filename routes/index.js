//requiero el metodo de enrutamiento del modulo de express
let router = require("express").Router();

//requiero las rutas de cada modelo a controlar
let user = require("./user"); //ubicacion rutas user

let city = require("./city");
let itinerary = require("./itinerary");

//obligo al enrutador principal que use la palabra user para controlar las rutas de user
router.use("/api/auth", user);
router.use("/api/city", city);
router.use("/api/itinerary", itinerary);

let hotel = require("./hotel");

router.use("/api/hotel", hotel);

let show = require("./show");

router.use("/api/show", show);

module.exports = router;
