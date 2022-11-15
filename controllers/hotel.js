const { query } = require('express')
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
        let query = {}
        let order = {}

        if (req.query._id){
            query = {name: req.query._id}
        }
        if (req.query.order){
            order = {capacity: req.query.capacity}
        }
        

        try {
            let todosH = await Hotel.find(query).sort(order)
            res.status(200).json({
                res: todosH,
                success: true,
                message: "se encontraron hoteles de manera exitosa"
            })
        } catch (error) {
            res.status(404).json({
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
            res.status(404).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async(req, res) => {
        let {id} = req.params
        try {
            let hotelD = await Hotel.findOneAndDelete({_id:id})
            if (hotelD) {
                res.status(200).json({
                  id: hotelD._id,
                  success: true,
                  message: "se elimino el hotel de manera exitosa"
              })  
              } else{
                  res.status(404).json({
                      success: false,
                      message: "no se encontro el hotel"
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