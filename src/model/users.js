const db = require("../helper/mysql");
module.exports = (options) => {
  return {
    getUsers,
    adduser,
    getUserById,
  };
};

const getUsers = (payload, callback) => {
  const sqlGetUsers =
    "SELECT `user_id`, `name`, `email`, `password`, `created_at`, `updated_at`, `deleted_at`, `status`   FROM `users_posts`.`users`";
  let options = {};
  db.query(sqlGetUsers, (err, result) => {
    if (!err) {
      options.response = result;
      options.status = 200;
      options.error = null;
      callback(options);
    } else {
      options.response = null;
      options.status = 500;
      options.error = err;
      callback(options);
    }
  });
};

const adduser = (payload, callback) => {
  let options = {};
  console.log(payload);
  const { name, email, password } = payload;
  const props = [name, email, password];
  console.log(props);
  const sqlAddUser =
    "INSERT INTO users (name, email, password) VALUES (?, ?,?)";
  db.query(sqlAddUser, props, (err, result) => {
    if (!err) {
      options.response = result;
      options.status = 201;
      options.error = null;
      callback(options);
    } else {
      options.response = null;
      options.status = 500;
      options.error = err;
      callback(options);
    }
  });
};

const getUserById = (data, callback) => {
  let options = {};
  let { id } = data;
  console.log(id);
  const sqlGetUserById = "SELECT * FROM users WHERE user_id = ?";
  db.query(sqlGetUserById, id, (err, result) => {
    if (!err) {
      options.response = result;
      options.status = 200;
      options.error = null;
      callback(options);
    } else {
      options.response = null;
      options.status = 500;
      options.error = err;
      callback(options);
    }
  });
};
