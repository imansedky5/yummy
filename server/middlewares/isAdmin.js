const Boom = require("@hapi/boom");

const isAdmin = (req, res, next) => {
  if (req.role !== "admin") {
    next(Boom.unauthorized(`you're not admin`));
  }
  next();
};
module.exports = isAdmin;
