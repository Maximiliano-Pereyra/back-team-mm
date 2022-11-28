let router = require("express").Router();
const schema = require("../schemas/city");
const validatorCity = require("../middlewares/validatorCity");
const City = require("../models/City");
let { create, read, readOne, update, destroy } = require("../controllers/city");
const passport = require("../config/passport");
const sameUser = require("../middlewares/sameUser");

router.post("/", validatorCity(schema),create);
router.get("/", read);
router.get("/:id", readOne);
router.put("/:id", update);
router.delete("/destroy/:id", destroy);

module.exports = router;
