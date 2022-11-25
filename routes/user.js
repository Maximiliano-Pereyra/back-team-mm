//requiero el metodo Router() del modulo express
let router = require("express").Router();
const accountExistsSignUp = require("../middlewares/accountExistsSignUp");
const accountExistsSignIn = require("../middlewares/accountExistsSignIn");
const validator = require("../middlewares/validator");
const accountHasBeenVerified = require("../middlewares/accountHasBeenVerified");
const mustSignIn = require("../middlewares/mustSignIn");
//desestructuro el controlador de user para traer los metodos que necesito enrutar
let {
  register,
  verified,
  access,
  accessWithToken,
} = require("../controllers/user");
const schema = require("../schemas/user");

//uso metodo route del enrutador para agregar una palabra extra a la ruta
//concatenando las palabaras por las que pasa el enrutador obtengo la ruta total para controlar este metodo
//router.route("/create").post(create);
router.post("/sign-up", validator(schema), accountExistsSignUp, register);
router.get("/verified/:code", verified);


module.exports = router;
