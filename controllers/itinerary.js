const Itinerary = require("../models/Itinerary");

const controller = {
  create: async (req, res) => {
    try {
      let newitinerary = await Itinerary.create(req.body);
      res.status(201).json({
        id: newitinerary._id,
        success: true,
        message: "The itinerary was created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  read: async (req, res) => {
    let query = {};
    if (req.query.cityId) {
      query = {
        cityId: req.query.cityId,
      };
    }
    if (req.query.userId) {
      query = {
        userId: req.query.userId,
      };
    }
    try {
      let theitinerary = await Itinerary.find(query);
      if (theitinerary) {
        res.status(200).json({
          success: true,
          message: "The itinerary has been found",
          response: theitinerary,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No itinerary found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let theitinerary = await Itinerary.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      );
      if (theitinerary) {
        res.status(200).json({
          id: theitinerary._id,
          success: true,
          message: "The itinerary was modified successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Itinerary not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let theitinerary = await Itinerary.findOneAndDelete({ _id: id });
      if (theitinerary) {
        res.status(200).json({
          res: theitinerary,
          success: true,
          message: "The itinerary was deleted",
        });
      } else {
        res.status(404).json({
          res: theitinerary,
          success: false,
          message: "Itinerary not found",
        });
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
          message: "Itinerary found",
          response: itinerary,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No itinerary found",
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
