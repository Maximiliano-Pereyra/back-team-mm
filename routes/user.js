//requiero el metodo Router() del modulo express
let router = require("express").Router();
const accountExistsSignUp = require("../middlewares/accountExistsSignUp");
const accountExistsSignIn = require("../middlewares/accountExistsSignIn");
const validatorUser = require("../middlewares/validatorUser");
const accountHasBeenVerified = require("../middlewares/accountHasBeenVerified");
const mustSignIn = require("../middlewares/mustSignIn");
const passport = require('../config/passport')
//desestructuro el controlador de user para traer los metodos que necesito enrutar
let {
  register,
  verified,
  enter,
  access,
  accessWithToken,
} = require("../controllers/user");
const schema = require("../schemas/user");

//uso metodo route del enrutador para agregar una palabra extra a la ruta
//concatenando las palabaras por las que pasa el enrutador obtengo la ruta total para controlar este metodo
//router.route("/create").post(create);
router.post("/sign-up", validatorUser(schema), accountExistsSignUp, register);
router.get("/verified/:code", verified);
router.post('/sign-in', accountExistsSignIn,accountHasBeenVerified , enter)
/* , passport.aunte('jwt', {session: false})  */

module.exports = router;
