const Comment = require('../models/Comment')

const commentController = {

    addComment: async (req, res) => {
        let {
            comment: textComment,
            showId
        } = req.body
        let userId = req.user.userId
        try {
            let comment = await new Comment({
                comment: textComment,
                showId,
                userId,
                date: new Date()
            }).save()
            res.status("201").json({
                message: "your comment has been added",
                response: comment._id,
                success: true,
            })
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "something wrong with your comment.",
                success: false,
            })
        }
    },

    getComment: async (req, res) => {
        const { id } = req.params
        try {
            let comment = await Comment.findOne({ _id: id })
            if (comment) {
                res.status("200").json({
                    message: "Comment found",
                    response: comment,
                    success: true,
                })
            } else {
                res.status("404").json({
                    message: "Coud not be found.",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "Error",
                success: false,
            })
        }
    },

    getComments: async (req, res) => {

        let query = {}
        if (req.query.showId) {
            query = {
                ...query,
                showId: req.query.showId
            }
        }
        if (req.query.userId) {
            query = {
                ...query,
                userId: req.query.userId
            }
        }
        if (req.query._id) {
            query = {
                ...query,
                _id: req.query._id
            }
        }

        try {
            let comments = await Comment.find(query)
            if (comments) {
                res.status("200").json({
                    message: "the following comments were found.",
                    response: comments,
                    success: true,
                })
            } else {
                res.status("404").json({
                    message: "no comments could be found.",
                    success: false,
                })
            }
        } catch (error) {
            console.log(error)
            res.status("400").json({
                message: "your comment could not be found.",
                success: false,
            })
        }
    },

    modifyComment:async (req, res) => {
        let { id } = req.params
        try {
            let commentU = await Comment.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (commentU) {
                res.status(200).json({
                    id: commentU._id,
                    success: true,
                    message: "se modifico el comentario de manera exitosa"
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: "no se encontro el comentario"
                })
            }

        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    },
    removeComment:  async (req, res) => {
        let { id } = req.params
        try {
            let commentD = await Comment.findOneAndDelete({ _id: id })
            if (commentD) {
                res.status(200).json({
                    id: commentD._id,
                    success: true,
                    message: "se elimino el comment de manera exitosa"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no se encontro el comment"
                })
            }
        } catch (error) {
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    }
}


module.exports = commentController