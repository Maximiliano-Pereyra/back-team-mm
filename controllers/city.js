const City = require("../models/City.js");

const controller = {
  create: async (req, res) => {
    try {
      let new_city = await City.create(req.body);
      res.status(201).json({
        response: new_city,
        success: true,
        message: "the city was successfully created",
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
    if (req.query.userId) {
      query = { userId: req.query.userId };
    }
    if (req.query.continent) {
      query = { continent: req.query.continent };
    }
    if (req.query.name) {
      query = {
        ...query,
        name: { $regex: req.query.name, $options: "i" },
      };
      
    }
    
    try {
      let all_cities = await City.find(query)
      if (all_cities) {
        res.status(200).json({
          success: true,
          message: "the cities were successfully found",
          response: all_cities,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "there are no cities",
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
      let city = await City.findOne({ _id: id }).populate({
        path: "userId",
        select: "name photo -_id",
      });
      if (city) {
        res.status(200).json({
          success: true,
          message: "the city was successfully found",
          response: city,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "there is no city",
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
      let city = await City.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (city) {
        res.status(200).json({
          id: city._id,
          success: true,
          message: "The city was successfully modified",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "The city was not found",
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
      let city = await City.findOneAndDelete({ _id: id });
      if (city) {
        res.status(200).json({
          res: city,
          success: true,
          message: "The city was successfully deleted",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "The city was not found",
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