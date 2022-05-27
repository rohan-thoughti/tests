var authController = require("../../controller/auth");

module.exports = function (app, passport) {
  app.get("/signup", authController.signup);

  app.get("/login", authController.login);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/home",

      failureRedirect: "/signup",
    })
  );

  app.get("/home", isLoggedIn, authController.home);

  app.get("/logout", authController.logout);

  app.post(
    "/login",
    passport.authenticate("local-signin", {
      successRedirect: "/home",

      failureRedirect: "/login",
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/login");
  }
};
