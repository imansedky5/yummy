const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const signToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};
module.exports = { signToken };
