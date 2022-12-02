let router = require('express').Router()
const validator = require("../middlewares/validator")
let {create, update, destroy, read} = require('../controllers/show')
const schema = require('../schemas/show')
const passport = require('../config/passport')

router.post('/',passport.authenticate('jwt', { session:false }),validator(schema), create)
router.get('/', read)
router.patch('/:id',passport.authenticate('jwt', { session:false }), update)
router.delete('/:id',passport.authenticate('jwt', { session:false }), destroy)

module.exports = router;