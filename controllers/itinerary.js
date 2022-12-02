const Itinerary = require("../models/Itinerary");

const controller = {
  read: async (req, res) => {
    let query = {};
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }
    if (req.query.cityId) {
      query = {
        cityId: req.query.cityId,
      };
    }
    try {
      let mitinerary = await Itinerary.find(query);
      if (mitinerary) {
        res.status(200).json({
          success: true,
          message: "the itinerary was successfully found",
          response: mitinerary,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "there is no itinerary",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  create: async (req, res) => {
    try {
      let itinerary = await Itinerary.create(req.body);
      res.status(201).json({
        id: itinerary._id,
        success: true,
        message: "the itinerary was successfully created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async(req, res) =>{
    let {id} = req.params
    try{
     let itinerary = await Itinerary.findOneAndUpdate({_id: id}, req.body, {new: true})
      if(itinerary){
        res.status(200).json({
          id: itinerary._id,
          success: true,
          message : "The itinerary was successfully modified"
        })
      }else{
        res.status(404).json({
          success: false,
          message: "The itinerary was not found"
        })
      }
    }catch(error){
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  },
  destroy: async (req, res) => {
    let {id} = req.params
    try {
      let itinerary = await Itinerary.findOneAndDelete({_id:id})
      if(itinerary){
        res.status(200).json({
          res: itinerary,
          success:true,
          message: "The itinerary was successfully deleted"
        })
       
      }else{
        res.status(404).json({
          res: itinerary,
          success:false,
          message: "The itinerary was not found"
        })
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  readOne: async (req, res) => {
    let id = req.params.id;
    try {
      let itinerary = await Itinerary.findOne({ _id: id }).populate({
        path: "userId",
        select: "name photo -_id",
      });
      if (itinerary) {
        res.status(200).json({
          success: true,
          message: "the itinerary was successfully found",
          response: itinerary,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "there is no itinerary",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};



module.exports = controller;