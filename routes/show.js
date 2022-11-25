let router = require('express').Router()

let {create, update, destroy, read} = require('../controllers/show')

router.post('/', create)
router.get('/', read)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;