let router = require("express").Router();
const Itinerary =  require ('../models/Itinerary')
const passport = require('../config/passport')
const validator = require ('../middlewares/validator')
const schema = require('../schemas/tinerary')
const sameUser = require ('../middlewares/sameUser')
let {
  create,
  read,
  update,
  destroy,
  readOne,
} = require("../controllers/itinerary");

router.post("/", passport.authenticate("jwt", { session: false }), validator(schema), create);
router.get("/", read);
router.put("/:id", passport.authenticate("jwt", { session: false }), sameUser(Itinerary), update);
router.delete("/:id", passport.authenticate("jwt", { session: false }), sameUser(Itinerary), destroy);
router.get("/:id", readOne);

module.exports = router;
