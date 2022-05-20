const db = require("../model");

const users = db.users;

const addUser = async (req, res) => {
  const payload = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    status: req.body.status ? req.body.status : false,
  };
  try {
    const createUser = await users.create(payload);
    res.status(200).send(createUser);
    console.log(createUser);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured",
    });
  }
};
const getUsers = async (req, res) => {
  const getUser = await users.findAll({});
  res.status(200).send(getUser);
};

module.exports = {
  addUser,
  getUsers,
};
