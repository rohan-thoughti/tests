const db = require("../helper/mysql");
module.exports = (options) => {
  return {
    getUsers,
    adduser,
    getUserById,
    updateUser,
    deleteUser,
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
  console.log(`Data ${data}`);
  let options = {};
  const { id } = data.id;
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

const updateUser = (data, callback) => {
  console.log(data);
  let options = {};
  const { id, name, email, password } = data;
  const props = [id, name, email, password];
  const sqlUpdateUser =
    "UPDATE users SET name = ?, email= ?, password = ? WHERE user_id = ?";
  db.query(sqlUpdateUser, props, (err, result) => {
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

const deleteUser = (data, callback) => {
  console.log(`Data ${data}`);
  let options = {};
  const { id } = data.id;
  console.log(id);
  const sqlDeleteUser = "DELETE FROM users WHERE user_id = ?";
  console.log(sqlDeleteUser);
  db.query(sqlDeleteUser, id, (err, result) => {
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