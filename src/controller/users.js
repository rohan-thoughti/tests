const { response } = require("express");

const model = require("../model/users")({});

module.exports = (options) => {
  return {
    getUsers: getUsers,
    adduser,
    getUserById,
  };
};

const getUsers = (req, res) => {
  let payload = {};
  model.getUsers(payload, function (response) {
    res.send(response);
  });
};

const adduser = (req, res) => {
  let data = req.body;
  let payload = {
    name: data.name,
    email: data.email,
    password: data.password,
  };
  model.adduser(payload, (response) => {
    res.send(response);
  });
};

const getUserById = (req, res) => {
  let data = {
    id: req.body,
  };
  //   console.log(data);
  model.getUserById(data, (response) => {
    res.send(response);
  });
};
