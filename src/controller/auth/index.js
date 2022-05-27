const signup = (req, res) => {
  res.send({ message: "signup" });
};

const login = (req, res) => {
  res.send({ message: "login" });
};

const home = (req, res) => {
  res.send({ message: "home" });
};

const logout = (req, res) => {
  console.log("Log Out Route Hit");
  req.session.destroy(function (err) {
    if (err) console.log(err);
    res.send({ message: "User Logged Out" });
  });
};
module.exports = {
  login,
  signup,
  home,
  logout,
};
