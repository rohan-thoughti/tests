require("dotenv").config();
const express = require("express");
const cors = require("cors");
var app = express();
var passport = require("passport");
var session = require("express-session");

var routerMain = require("./routes");
var { commonHelpers } = require("./helpers");

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

const models = require("../src/models");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
//Passport strategies
app.use(passport.initialize());
app.use(passport.session());
require("../src/routes/auth")(app, passport);

require("../src/config/passport")(passport, models.Users);
models.sequelize
  .sync()
  .then(function () {
    console.log("Database Connected");
  })
  .catch(function (err) {
    console.log(`Database Not Connected`);
  });

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
