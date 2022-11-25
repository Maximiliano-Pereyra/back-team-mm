const errorMax = {
    notFound:(req, res, next) => {
        res.status(404).json({message:'Route is not found'})
    }
}

module.exports = errorMax