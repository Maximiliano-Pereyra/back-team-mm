let router = require('express').Router()
const schema = require('../schemas/hotel')
const validatorHotel = require('../middlewares/validadorHotel')

let {create, read, update, destroy, readOne} = require('../controllers/hotel')

router.route('/')
    .get(read)
    .post(validatorHotel(schema),create)

router.patch('/:id',update)
router.delete('/:id',destroy)
router.get("/:id", readOne);

module.exports = router;