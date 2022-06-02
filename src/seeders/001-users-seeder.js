/* eslint-disable no-unused-vars */

"use strict";

// eslint-disable-next-line node/no-extraneous-require
var moment = require("moment");
var bcrypt = require("bcrypt");
const BCRYPT_SALT_ROUNDS = 10;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          user_id: 1,
          name: "Admin",
          email: "admin@gmail.com",
          password: bcrypt.hashSync("123456", BCRYPT_SALT_ROUNDS),
          created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
          updated_at: null,
          deleted_at: null,
          status: 1,
        },
        {
          user_id: 2,
          name: "Test User 1",
          email: "user1@gmail.com",
          password: bcrypt.hashSync("123456", BCRYPT_SALT_ROUNDS),
          created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
          updated_at: null,
          deleted_at: null,
          status: 0,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {},
};
