const connection = require("../config/connection");

const checkUserBYEmail = (email) => {
  return connection.query({
    text: 'SELECT * FROM users WHERE email=$1',
    values: [email],
  });
};
module.exports = checkUserBYEmail;
