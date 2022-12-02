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

router.post("/", validator(schema), create);
router.get("/", read);
router.put("/:id", update);
router.delete("/destroy/:id", destroy);
router.get("/:id", readOne);

module.exports = router;
