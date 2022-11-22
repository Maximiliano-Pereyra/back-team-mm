let router = require("express").Router();

let {
  create,
  read,
  update,
  destroy,
  readOne,
} = require("../controllers/itinerary");

router.post("/", create);
router.get("/", read);
router.put("/:id", update);
router.delete("/destroy/:id", destroy);
router.get("/:id", readOne);

module.exports = router;
