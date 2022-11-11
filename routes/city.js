let router = require("express").Router();


let { create,read } = require("../controllers/city");

router.route("/create").post(create);
router.route('/read').get(read);

module.exports = router;