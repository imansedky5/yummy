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
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};
module.exports = { signToken, verifyToken };
