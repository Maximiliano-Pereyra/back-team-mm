const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const jwt = require('jsonwebtoken')
const accountVerificationEmail = require("./accountVerificationEmail");
const {
  userSignedUpResponse,
  userNotFoundResponse,
  invalidCredentialsResponse,
  userSignedOutResponse,
} = require("../config/responses");

const controller = {
  register: async (req, res, next) => {
    //metodo para que el usuario se registre
    let { name, lastName, photo, age, email, password, role } = req.body;
    let verified = false;
    let logged = false;
    let code = crypto.randomBytes(10).toString("hex"); //10 es la longitud
    password = bcryptjs.hashSync(password, 10); //10 es el grado de seguridad
    try {
      await User.create({
        name,
        lastName,
        photo,
        age,
        email,
        role,
        password,
        verified,
        logged,
        code,
      });
      await accountVerificationEmail(email, code, name);
      return userSignedUpResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  verified: async (req, res, next) => {
    const { code } = req.params;
    console.log(code);
    try {
      let user = await User.findByIdAndUpdate(
        { code: code },
        { verified: true },
        { new: true }
      );
      if (user) {
        return res.redirect("https://www.google.com/");
      }
      return userNotFoundResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  enter: async (req, res, next) => {
    const { password } = req.body;
    const { user } = req;

    try {
      const verificationPassword = bcryptjs.compareSync(password, user.password)

      if (verificationPassword) {
        const userEnter = await User.findOneAndUpdate({ _id: user.id }, { logged: true }, { new:true })
        const token = jwt.sign(
          {id:userEnter._id, name: userEnter.name, photo: userEnter.photo, logged: userEnter.logged },
          process.env.KEY_JWT,
          { expiresIn: 60 * 60 * 24 }
        )

        return res.status(200).json({
          response: { user, token },
          success: true,
          message: 'Welcome' + user.name
        })
      }

      return invalidCredentialsResponse(req, res)

    } catch (error) {
      next(error)
    }

  },

  enterWhitToken: async (req, res, next) => {
    let { user } = req
    try {
      return res.json({
        response: {
          user: {
            name: user.name,
            photo: user.photo,
            logged: user.logged,
            role: user.role
          },
        },
        success: true,
        message: 'Welcome' + user.name
      })
    } catch (error) {
      next(error)
    }
  },


  read: async (req, res) => {
    try {
    } catch { }
  },

  update: async (req, res) => {
    try {
    } catch { }
  },

  destroy: async (req, res) => {
    try {
    } catch { }
  },
};

module.exports = controller;
