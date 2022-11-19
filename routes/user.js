//requiero el metodo Router() del modulo express
let router = require("express").Router();

//desestructuro el controlador de user para traer los metodos que necesito enrutar
let { create } = require("../controllers/user");

//uso metodo route del enrutador para agregar una palabra extra a la ruta
//concatenando las palabaras por las que pasa el enrutador obtengo la ruta total para controlar este metodo
router.route("/create").post(create);

module.exports = router;
