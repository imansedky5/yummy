const connection = require("../config/connection");
const { readFileSync } = require("fs");
const { join } = require("path");

const dbBuild = () => {
  const buildSql = readFileSync(__dirname, join("./build.sql")).toString();
  const fakeSql = readFileSync(__dirname, join("./fakeData.sql")).toString();
  return connection.query(buildSql + fakeSql);
};
module.exports = dbBuild;
