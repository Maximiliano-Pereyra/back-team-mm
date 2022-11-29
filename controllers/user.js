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
      await accountVerificationEmail(email, code);
      return userSignedUpResponse(req, res);
    } catch (error) {
      next(error);
    }
  },

  verified: async (req, res, next) => {
    const { code } = req.params;
    
    try {
      let user = await User.findOneAndUpdate(
        { code: code },
        { verified: true },
        { new: true }
      );
      if (user) {
        return res.redirect("http://localhost:3000/");
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
              email: user.email,
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
  update: async (req, res,next) => {
    let {id} = req.params
    try {
      let userU = await User.findOneAndUpdate({_id:id}, req.body, { new: true })
        if (userU) {
          res.status(200).json({
            id: User._id,
            success: true,
            message: "data were successfully modified"
        })  
        } else{
            res.status(404).json({
                success: false,
                message: "don't found user"
            })
        }
        
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
},
read: async (req, res, next) => {
  let id = req.params.id;
  try {
    let user = await User.findById({ _id: id })
    console.log(user);
    if (user) {
      res.status(200).json({
        success: true,
        message: "the user was successfully found",
        response: user,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "there is no user",
      });
    }
  } catch (error) {
    next(error)
  }
},
};

module.exports = controller;

