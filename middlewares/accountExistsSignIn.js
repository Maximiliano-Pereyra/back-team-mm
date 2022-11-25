const User = require("../models/User");
const { invalidCredentialsResponse } = require("../config/responses")

async function accountExistsSignIn(req, res, next) {
    const user = await User.findOne({mail: req.body.mail})
    if (user) {
        req.user = { //inyecto al req la propiedad user con los datos que necesito
            id: user._id,
            name: user.name,
            lastName: user.lastName,
            photo: user.photo,
            mail: user.mail,
            password: user.password,
            verified: user.verified
        }
        //console.log(req.user)
        return next()
    }
    return invalidCredentialsResponse(req,res)
}

module.exports = accountExistsSignIn