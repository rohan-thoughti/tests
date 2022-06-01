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
require("../src/config/passport");
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
app.use("/", routerMain);
var authRoutes = require("../src/routes/auth");
var usersRoutes = require("../src/routes/users");
var postsRoutes = require("../src/routes/posts");
app.use("/", authRoutes);
app.use("/", passport.authenticate("jwt", { session: false }), usersRoutes);
app.use("/", passport.authenticate("jwt", { session: false }), postsRoutes);

models.sequelize
  .sync()
  .then(function () {
    console.log("Database Connected");
  })
  .catch(function (err) {
    console.log(`Database Not Connected`);
  });

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
