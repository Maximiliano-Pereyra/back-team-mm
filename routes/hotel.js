let router = require('express').Router()
const schema = require('../schemas/hotel')
const validatorHotel = require('../middlewares/validadorHotel')

let {create, read, update, destroy} = require('../controllers/hotel')

router.route('/')
    .get(read)
    .post(validatorHotel(schema),create)

router.patch('/:id',update)
router.delete('/:id',destroy)

module.exports = router;