const bcrypt = require("bcrypt");
const Boom = require("@hapi/boom");
const jwt = require("jsonwebtoken");

const { checkUserBYEmail } = require("../database/queries");

const { loginSchema, signToken } = require("../utils/index");

const loginHandler = async (req, res, next) => {
  try {
    const { email, userPassword } = req.body;

    try {
      await loginSchema.validateAsync(req.body);
    } catch (err) {
      throw Boom.badRequest(err.details[0].message);
    }
    const { rows, rowCount } = await checkUserBYEmail(email);
    if (rowCount === 0) {
      throw Boom.unauthorized("you're not registered!");
    }
    const { id, role, password: hashedPassword } = rows[0];
    const match = await bcrypt.compare(userPassword, hashedPassword);
    if (!match) {
      throw Boom.unauthorized("invalid password");
    }
    const token = await signToken({ id, role });
    res
      .cookie("token", token, { httpOnly: true })
      .send("logged in successfully");
  } catch (err) {
    next(err);
  }
};
module.exports = loginHandler;
