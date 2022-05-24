require("dotenv").config();
const express = require("express");
const cors = require("cors");
var app = express();

var routerMain = require("./routes");
var {
  commonHelpers
} = require("./helpers");

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

app.use("/", routerMain);

app.use((req, res, next) => {
  const err = new Error(process.env.ERR_404);
  err.status = 404;
  next(err);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  let errCode = err.status || 501;
  return commonHelpers.generateApiResponse(res, req, err.message, errCode);
});

module.exports = app;
