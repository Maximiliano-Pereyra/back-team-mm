const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
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
      const verifiedPassword = bcryptjs.compareSync(password, user.password);

      if (verifiedPassword) {
        const userDb = await User.findOneAndUpdate(
          { _id: user.id },
          { logged: true },
          { new: true }
        );
        let userProctected = {
          id: userDb._id,
          name: userDb.name,
          photo: userDb.photo,
          logged: userDb.logged,
        };
        const token = jwt.sign(userProctected, process.env.KEY_JWT, {
          expiresIn: 60 * 60 * 24,
        });

        return res.status(200).json({
          response: {
            user: {
              name: user.name,
              lastName: user.lastName,
              photo: user.photo,
              role: user.role,
              id: user.id,
            },
            token,
          },
          success: true,
          message: "Welcome " + user.name,
        });
      }
      return invalidCredentialsResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  enterWithToken: async (req, res, next) => {
    let { user } = req;
    try {
      return res.json({
        response: {
          user,
        },
        success: true,
        message: "Welcome " + user.name,
      });
    } catch (error) {
      next(error);
    }
  },

  leave: async (req, res, next) => {
    const { id } = req.user;

    try {
      let user = await User.findOneAndUpdate(
        { _id: id },
        { logged: false },
        { new: true }
      );
      console.log(user);
      return userSignedOutResponse(req, res);
    } catch (error) {
      next(error);
    }
  },
  /*  create: async (req, res) => {
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
