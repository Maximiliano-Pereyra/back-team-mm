let router = require("express").Router();

let { create, read, update, destroy } = require("../controllers/itinerary");

router.route("/create").post(create);
router.route("/read").get(read);
router.put("/update/:id", update);
router.delete("/destroy/:id", destroy);

module.exports = router;
