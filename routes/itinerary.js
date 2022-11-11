let router = require("express").Router();

let {create} = require("../controllers/itinerary");

router.route('/create').post(create)

module.exports = router;