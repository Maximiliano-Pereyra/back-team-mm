let router = require('express').Router()
let passport = require('../config/passport')
const validatorComment = require('../middlewares/validatorComment')
const schema = require('../schemas/comment')
let {addComment, getComments, modifyComment, removeComment} = require('../controllers/comment.js')

router.post('/',passport.authenticate('jwt', {session:false}), validatorComment(schema) , addComment);
router.get('/', getComments);
router.put('/:id',passport.authenticate('jwt', {session:false}), modifyComment);
router.delete('/:id',passport.authenticate('jwt', {session:false}), removeComment)


module.exports = router;