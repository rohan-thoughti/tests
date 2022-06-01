const bcrypt = require("bcrypt");
var saltRounds = 10;

var helpers = {
  generateHash: async (password) => {
    return await bcrypt.hash(password, saltRounds);
  },
};

module.exports = helpers;
