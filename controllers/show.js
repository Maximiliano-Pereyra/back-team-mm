const Show = require('../models/Show')

const controller = {

    create: async(req, res) => {
        try {
            let newShow= await Show.create(req.body)
            res.status(201).json({
                id: newShow._id,
                success: true,
                message: "se creo el Show de manera exitosa"
            })   
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
}

module.exports = controller