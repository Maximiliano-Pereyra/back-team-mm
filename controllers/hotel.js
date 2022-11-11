const Hotel = require('../models/Hotel')

const controller = {

    create: async(req, res) => {
        try {
            let newHotel= await Hotel.create(req.body)
            res.status(201).json({
                id: newHotel._id,
                success: true,
                message: "se creo el hotel de manera exitosa"
            })   
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    read: async(req, res)=>{
        try {
            let todosH = await Hotel.find()
            res.status(200).json({
                res: todosH,
                success: true,
                message: "se encontraron hoteles de manera exitosa"
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
            let hotelU = await Hotel.findOneAndUpdate({_id:id}, req.body, { new: true })
            if (hotelU) {
              res.status(200).json({
                id: hotelU._id,
                success: true,
                message: "se modificaron los datos del hotel de manera exitosa"
            })  
            } else{
                res.status(400).json({
                    success: false,
                    message: "no se encontro el hotel"
                })
            }
            
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }

}

module.exports = controller