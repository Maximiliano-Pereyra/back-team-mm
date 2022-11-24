const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const accountVerificationEmail = require("./accountVerificationEmail");
const { userSignedUpResponse } = require("../config/responses");

const controller = {
  register: async (req, res, next) => {
    //metodo para que el usuario se registre
    let {
      name,
      lastName,
      photo,
      age,
      email,
      password,
      verified,
      logged,
      code,
    } = req.body;
    verified = false;
    logged = false;
    code = crypto.randomBytes(10).toString("hex"); //10 es la longitud
    password = bcryptjs.hashSync(password, 10); //10 es el grado de seguridad
    try {
      await User.create({
        name,
        lastName,
        photo,
        age,
        email,
        password,
        verified,
        logged,
        code,
      });
      await accountVerificationEmail(email, code);
      return userSignedUpResponse;
    } catch (error) {
      next(error);
    }
  },

  verified: async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  },

  enter: async (req, res, next) => {},

  /*   create: async (req, res) => {
    try {
      let new_user = await User.create(req.body);
      res.status(201).json({
        id: new_user._id,
        success: true,
        message: "The user has been created successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }, */

  read: async (req, res) => {
    try {
    } catch {}
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
