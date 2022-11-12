let router = require("express").Router();

let { create, read, readOne, update } = require("../controllers/city");

router.route("/create").post(create);
router.route("/read").get(read);
router.get("/:id", readOne);
router.put("/update/:id", update);

module.exports = router;
