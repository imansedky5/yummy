require("dotenv").config();

const express = require("express");
const router = require("./router");
var cookieParser = require("cookie-parser");
const { clientError, serverError } = require("./middlewares/error");

const app = express();

app.set("port", process.env.PORT || 5000);

const middlewares = [
  express.json(),
  cookieParser(),
  express.urlencoded({ extended: false }),
];

app.use(middlewares);
app.use("/api/v1", router);
app.use(clientError);
app.use(serverError);

module.exports = app;
