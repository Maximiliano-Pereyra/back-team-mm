let router = require("express").Router();
const schema = require("../schemas/reaction");
const validator = require("../middlewares/validator");
let { create, read, updateReaction } = require("../controllers/reaction");
const passport = require("passport");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  validator(schema),
  create
);
router.get("/", passport.authenticate("jwt", { session: false }), read);
router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  updateReaction
);

module.exports = router;
