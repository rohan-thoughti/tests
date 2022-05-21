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

const getUserById = async (req, res) => {
  const id = req.params.id;
  const getUserById = await users.findOne({ where: { user_id: id } });
  res.status(200).send(getUserById);
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  const updateUser = await users.update(req.body, { where: { user_id: id } });
  res.status(200).send(updateUser);
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  await users.destroy({ where: { user_id: id } });
  res.status(200).send("User Removed");
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
