let router = require('express').Router()
let {create} = require('../controllers/hotel')

router.route('/create').post(create)

module.exports = router;