const bCrypt = require("bcrypt");
const Models = require("../models");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
var options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken("Bearer");
options.secretOrKey = process.env.JWT_SECRET;

// Signin

passport.use(
  "local-signin",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      var isValidPassword = function (userpass, password) {
        return bCrypt.compare(password, userpass);
      };
      Models.Users.findOne({
        where: {
          email: email,
        },
      })
        .then(function (user) {
          if (!user) {
            return done(null, false, {
              message: "Email dose not Exist",
            });
          }
          let passworValidationPromise = isValidPassword(
            user.password,
            password
          );
          passworValidationPromise.then((isValid) => {
            if (!isValid) {
              return done(null, false, {
                message: "Incorrect Password",
              });
            }
            var userInfo = user.get();
            return done(null, userInfo);
          });
        })
        .catch(function (err) {
          return done(null, false, {
            message: "Something went wrong with Signin",
          });
        });
    }
  )
);

//JWT Strategy

passport.use(
  "jwt",
  new JwtStrategy(options, (jwtPaload, done) => {
    try {
      Models.Users.findByPk(jwtPaload.user_id).then((user) => {
        if (user) {
          done(null, user);
        } else {
          done(user, false);
        }
      });
    } catch (err) {
      done(err);
    }
  })
);

//Serialize

passport.serializeUser(function (auth, done) {
  done(null, auth.user_id);
});

//Deserialize User

passport.deserializeUser(function (user_id, done) {
  Models.Users.findByPk(user_id).then(function (user) {
    if (user) {
      done(null, user.get());
    } else {
      done(user.errors, null);
    }
  });
});
