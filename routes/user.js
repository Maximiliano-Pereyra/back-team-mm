//requiero el metodo Router() del modulo express
let router = require("express").Router();
const { accountExists } = require("../middlewares/accountExistsSignUp");
const validatorUser = require("../middlewares/validatorUser");
//desestructuro el controlador de user para traer los metodos que necesito enrutar
let { register } = require("../controllers/user");
const { schema } = require("../schemas/user");

//uso metodo route del enrutador para agregar una palabra extra a la ruta
//concatenando las palabaras por las que pasa el enrutador obtengo la ruta total para controlar este metodo
//router.route("/create").post(create);
router.post("/", validatorUser(schema), accountExists, register);

module.exports = router;
