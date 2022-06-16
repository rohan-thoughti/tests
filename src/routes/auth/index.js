const jwt = require("jsonwebtoken");
var express = require("express");
var router = express.Router();
var passport = require("passport");

router.post("/login", (req, res, next) => {
  passport.authenticate(
    "local-signin",
    { session: false },
    (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(500).json(info.message);
      }
      const payload = {
        user_id: user.user_id,
        name: user.name,
      };
      const options = {
        subject: `${user.user_id}`,
        expiresIn: 3600,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, options);
      res.json({ token });
    }
  )(req, res, next);
});

router.post("/login", function (req, res, next) {
  passport.authenticate(
    "local",
    { session: false },
    function (err, user, info) {
      if (err) {
        return next(err);
      }

      if (!user) {
        return res.status(500).json(info.message);
      }

      const payload = {
        user_id: user.user_id,
      };
      const options = {
        subject: `${user.id}`,
        expiresIn: 3600,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, options);

      res.json({ token });
    }
  )(req, res, next);
});
module.exports = router;
