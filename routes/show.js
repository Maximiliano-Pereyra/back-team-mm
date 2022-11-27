let router = require('express').Router()
const validator = require("../middlewares/validator")
let {create, update, destroy, read} = require('../controllers/show')
const schema = require('../schemas/show')

router.post('/',validator(schema), create)
router.get('/', read)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;