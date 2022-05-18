const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "users_posts",
});

// db.query("Select 1", function (err, res) {
//   console.log(res);
// });

module.exports = db;
