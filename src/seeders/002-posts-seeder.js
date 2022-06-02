"use strict";
var moment = require("moment");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "posts",
      [
        {
          user_id: 1,
          title: "Qoute",
          description: "If you can dream it, you can do it.",
          published: 1,
          created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
          updated_at: null,
          deleted_at: null,
          status: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
