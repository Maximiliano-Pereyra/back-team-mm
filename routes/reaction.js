let router = require('express').Router()
let {create, updateReaction, read, deleteReactionOfaUser} = require("../controllers/reaction")
const passport = require('../config/passport')
const validator = require("../middlewares/validator");
const schema = require("../schemas/reaction")
const sameUserReaction = require('../middlewares/sameUserReaction')
const Reaction = require("../models/Reaction");


router.post("/",passport.authenticate("jwt", { session: false }), validator(schema), create)
router.get("/", passport.authenticate("jwt", { session: false }),read)
router.put("/", passport.authenticate("jwt", { session: false }),  updateReaction)
router.put("/:id", passport.authenticate("jwt", { session: false }), sameUserReaction(Reaction),  deleteReactionOfaUser)



module.exports = router;
