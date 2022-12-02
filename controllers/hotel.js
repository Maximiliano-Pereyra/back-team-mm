const { query } = require('express')
const Hotel = require('../models/Hotel')

const controller = {

    create: async (req, res) => {
        try {
            let newHotel = await Hotel.create(req.body)
            res.status(201).json({
                capacity: newHotel.capacity,
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
    read: async (req, res) => {
        let query = {}
        let order = {}

        if (req.query.name) {
            query = {
                ...query,
                name: { $regex: req.query.name, $options: "i" }
            }
        }

        if (req.query.order) {
            order = { capacity: req.query.order }
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
    readOne: async (req, res) => {
        let id = req.params.id;
        try {
            let findhotel = await Hotel.findOne({ _id: id }).populate({
                path: "userId",
                select: "name photo -_id",
            });
            if (findhotel) {
                res.status(200).json({
                    message: "Hotel found",
                    response: findhotel,
                    success: true,
                });
            } else {
                res.status(404).json({
                    message: "Could not find the hotel",
                    success: false,
                });
            }
        } catch (error) {
            console.log(error);
            res.status(400).json({
                message: error.message,
                success: false,
            });
        }
    },
    update: async (req, res) => {
        let { id } = req.params
        try {
            let hotelU = await Hotel.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (hotelU) {
                res.status(200).json({
                    id: hotelU._id,
                    success: true,
                    message: "se modificaron los datos del hotel de manera exitosa"
                })
            } else {
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
    destroy: async (req, res) => {
        let { id } = req.params
        try {
            let hotelD = await Hotel.findOneAndDelete({ _id: id })
            if (hotelD) {
                res.status(200).json({
                    id: hotelD._id,
                    success: true,
                    message: "se elimino el hotel de manera exitosa"
                })
            } else {
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