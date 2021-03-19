const { Pool } = require("pg");
require("dotenv").config();

const { DEV_DATABASE_URL, DATABASE_URL, NODE_ENV } = process.env;

let dbUrl;
switch (NODE_ENV) {
  case "production":
    dbUrl = DATABASE_URL;
    break;
  case "development":
    dbUrl = DEV_DATABASE_URL;
    break;
  default:
    throw new Error("NO DB URL!!");
}

const options = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(options);
