let router = require("express").Router();

let { create, read, readOne } = require("../controllers/city");

router.route("/create").post(create);
router.route("/read").get(read);
router.get("/:id", readOne);

module.exports = router;
