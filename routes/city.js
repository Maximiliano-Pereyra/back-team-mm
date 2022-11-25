let router = require("express").Router();

const schema = require("../schemas/city");
const validatorCity = require("../middlewares/validatorCity");

let { create, read, readOne, update, destroy } = require("../controllers/city");

router.post("/", validatorCity(schema),create);
router.get("/", read);
router.get("/:id", readOne);
router.put("/:id", update);
router.delete("/destroy/:id", destroy);

module.exports = router;
