const Boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

const { signupSchema } = require("../utils/index");
const { checkUserBYEmail, signupUser } = require("../database/queries/index");

const signupHandler = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    try {
      await signupSchema.validateAsync(req.body);
    } catch (err) {
      throw Boom.badRequest(err.details[0].message);
    }
    const dbUsers = await checkUserBYEmail(email);
    if (dbUsers.rowCount > 0) {
      throw Boom.conflict("user already exist!");
    }
      const hashedPassword = await bcrypt.hash(password, 10);

      await signupUser(firstName, lastName, email, hashedPassword);
      res.send("signed up successfully :)");
    
  } catch (err) {
    next(err);
  }
};
module.exports = signupHandler;
