const jwt = require("jsonwebtoken");
var express = require("express");
var router = express.Router();
var passport = require("passport");

router.post("/login", (req, res, next) => {
  passport.authenticate("local-signin", { session: false }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res
        .status(401)
        .json({ message: "Unauthorized Access - No Token Provided!" });
    }
    const payload = {
      user_id: user.user_id,
    };
    const options = {
      expiresIn: 3600,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, options);
    res.json({ token });
  })(req, res, next);
});

module.exports = router;
