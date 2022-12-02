let router = require('express').Router()
const schema = require('../schemas/hotel')
const validatorHotel = require('../middlewares/validadorHotel')
const passport = require('../config/passport')

let {create, read, update, destroy, readOne} = require('../controllers/hotel')

router.route('/')
    .get(read)
    .post(validatorHotel(schema),passport.authenticate('jwt', { session:false }),create)

router.patch('/:id',passport.authenticate('jwt', { session:false }),update)
router.delete('/:id',passport.authenticate('jwt', { session:false }),destroy)
router.get("/:id", readOne);

module.exports = router;