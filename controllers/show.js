const Show = require('../models/Show')

const controller = {

    create: async (req, res) => {
        try {
            let newShow = await Show.create(req.body)
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
    },
    update: async (req, res) => {
        let {id} = req.params
        try {
            let showU = await Show.findOneAndUpdate({_id:id}, req.body, { new: true })
            if (showU) {
              res.status(200).json({
                id: showU._id,
                success: true,
                message: "se modificaron los datos del Show de manera exitosa"
            })  
            } else{
                res.status(404).json({
                    success: false,
                    message: "no se encontro el Show"
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

module.exports = controller