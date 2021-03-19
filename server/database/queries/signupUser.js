const connection = require("../config/connection");
const signupUser = (...args) => {
  return connection.query({
    text:
      "INSERT INTO users(first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
    values: args,
  });
};
module.exports = signupUser;
