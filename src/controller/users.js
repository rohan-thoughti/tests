const { response } = require("express");
const res = require("express/lib/response");

const model = require("../model/users")({});

module.exports = (options) => {
  return {
    getUsers: getUsers,
    adduser,
    getUserById,
    updateUser,
    deleteUser,
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
  console.log(req);
  let data = {
    id: req.params,
  };
  console.log(data);
  model.getUserById(data, (response) => {
    res.send(response);
  });
};

const updateUser = (req, res) => {
  console.log(req);
  const { id } = req.params;
  let data = {
    id,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };

  console.log(data);
  model.updateUser(data, (response) => {
    res.send(response);
  });
};

const deleteUser = (req, res) => {
  console.log(req);
  let data = {
    id: req.params,
  };
  model.deleteUser(data, (response) => {
    res.send(response);
  });
};
