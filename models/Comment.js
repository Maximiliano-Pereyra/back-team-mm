const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    showId:{type: mongoose.Types.ObjectId, ref:'showes'},
    userId:{type: mongoose.Types.ObjectId, ref:'users'},
    date: {type: Date ,required: true},
    comment:{type: String, required: true},
})
const Comment = mongoose.model('comments',schema)
module.exports = Comment