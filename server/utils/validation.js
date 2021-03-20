const joi = require("joi");

const signupSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(6).required(),
});
const loginSchema = joi.object({
  email: joi.string().email().required(),
  userPassword: joi.string().alphanum().min(6).required(),
});

module.exports = { signupSchema, loginSchema };
