const City = require("../models/City");

const controller = {
  create: async (req, res) => {
    try {
      let new_city = await City.create(req.body);
      res.status(201).json({
        id: new_city._id,
        success: true,
        message: "The city has been created successfully",
        new_city
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
      query = {
        ...query,
        continent: req.query.continent,
      };
    }
    if (req.query.name) {
      query = {
        ...query,
        name: { $regex: req.query.name, $options: "i" },
      };
    }
    try {
      let allcities = await City.find(query).populate({
        path: "userId",
        select: "role -_id",
      });
      if (allcities) {
        res.status(200).json({
          success: true,
          message: "Cities were successfully found",
          response: allcities,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "No city was found",
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
      let findcity = await City.findOne({ _id: id }).populate({
        path: "userId",
        select: "name photo -_id",
      });
      if (findcity) {
        res.status(200).json({
          message: "City found",
          response: findcity,
          success: true,
        });
      } else {
        res.status(404).json({
          message: "Could not find the city",
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
    let { id } = req.params; //saco propiedad id del objeto params
    try {
      let onecity = await City.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (onecity) {
        res.status(200).json({
          id: onecity._id,
          message: "The city has been modified",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "The city has not been found",
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

  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let onecity = await City.findByIdAndDelete({ _id: id });
      if (onecity) {
        res.status(200).json({
          id: onecity._id,
          message: "The city has been deleted",
          success: true,
        });
      } else {
        res.status(404).json({
          message: "The city has not been found",
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
};

module.exports = controller;
