const Boom = require("@hapi/boom");

const { verifyToken } = require("../utils/index");

const isAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw Boom.unauthorized(`you're unautherized`);
    }
    const decodedUserData = await verifyToken(token);
    const { id, role } = decodedUserData;
    if (!decodedUserData) {
      throw Boom.unauthorized(`you're unautherized`);
    } else {
      req.id = id;
      req.role = role;
      next();
    }
  } catch (err) {
    next(err);
  }
};
module.exports = isAuth;
