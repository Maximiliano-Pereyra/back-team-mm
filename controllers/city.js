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
    let {query} = req;
    console.log(req.query);
    try {
      let allcities = await City.find(query);
      if (allcities) {
        res.status(200).json({
          response: allcities,
          success: true,
          message: "Cities have been found",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "There are no cities",
        });
      }
    } catch {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  update: async (req, res) => {
    try {
    } catch {}
  },

  destroy: async (req, res) => {
    try {
    } catch {}
  },
};

module.exports = controller;
