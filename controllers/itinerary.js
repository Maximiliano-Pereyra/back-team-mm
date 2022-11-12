const Itinerary = require("../models/Itinerary");

const controller = {
  create: async (req, res) => {},

  read: async (req, res) => {
    let query = {};
    if (req.query.cityId) {
      query = {
        cityId: req.query.cityId,
      };
    }
    try {
      let theitinerary= await Itinerary.find(query);
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
};

module.exports = controller;
