const { mustBeTheOwner} = require("../config/responses");

const sameUser = (model) => [
  async (req, res, next) => {
    let document = await model.findOne({ _id: req.params.id });
    if (document.userId.equals(req.user.id)) {
      return next();
    }
    return mustBeTheOwner(req, res);
  },
];

module.exports = sameUser;