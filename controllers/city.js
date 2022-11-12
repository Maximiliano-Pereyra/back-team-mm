const { query } = require("express");
const City = require("../models/City");

const controller = {
  create: async (req, res) => {
    try {
      let new_city = await City.create(req.body);
      res.status(201).json({
        id: new_city._id,
        success: true,
        message: "The city has been created successfully",
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
    if (req.query.name) {
      query = { name: req.query.name };
    }
    if (req.query.continent) {
      query = {
        ...query,
        continent: req.query.continent,
      };
    }
    if (req.query.population) {
      query = {
        ...query,
        population: req.query.population,
      };
    }
    try {
      let all_cities = await City.find(query).populate("userId", "name");
      if (all_cities.length !== 0) {
        res.status(200).json({
          response: all_cities,
          success: true,
          message: "Cities were found successfully",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Cities not found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "No city found",
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
    try {
    } catch (error) {}
  },

  destroy: async (req, res) => {
    try {
    } catch {}
  },
};

module.exports = controller;
