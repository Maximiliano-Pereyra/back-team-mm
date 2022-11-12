let router = require("express").Router();

let { create, read, readOne, update, destroy } = require("../controllers/city");

router.route("/create").post(create);
router.route("/read").get(read);
router.get("/:id", readOne);
router.put("/update/:id", update);
router.delete("/destroy/:id", destroy);

module.exports = router;
