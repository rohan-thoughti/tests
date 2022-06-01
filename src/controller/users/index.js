const Models = require("../../models");

var { commonHelpers, encryptionHelpers } = require("../../helpers");

const addUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).send({ message: "Require All fields" });
  }

  const checkEmail = req.body.email;
  const findEmail = await Models.Users.findOne({
    where: { email: checkEmail },
  });

  if (findEmail) {
    return res.send({ message: `${checkEmail} This email already Exist` });
  }

  // var generateHash = function () {
  //   return bCrypt.hashSync(req.body.password, bCrypt.genSaltSync(8), null);
  // };
  var generateHash = await encryptionHelpers.generateHash(req.body.password);

  const payload = {
    name: req.body.name,
    email: req.body.email,
    password: generateHash,
    status: req.body.status ? req.body.status : false,
  };
  console.log("payload: ", payload);
  try {
    const createUser = await Models.Users.create(payload);
    return commonHelpers.generateApiResponse(
      res,
      req,
      "User Created",
      200,
      createUser
    );
  } catch (err) {
    console.log(err);
    return commonHelpers.generateApiResponse(
      res,
      req,
      "Error While creating User",
      400,
      []
    );
  }
};

const login = async (req, res) => {};

// TODO Refer this function
const getUsers = async (req, res) => {
  const allUsers = await Models.Users.findAndCountAll();
  if (
    allUsers == null ||
    typeof allUsers.count == "undefined" ||
    allUsers.count <= 0
  ) {
    return commonHelpers.generateApiResponse(
      res,
      req,
      "No data found.",
      404,
      []
    );
  }

  return commonHelpers.generateApiResponse(
    res,
    req,
    "Data found.",
    200,
    allUsers
  );
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  const findId = await Models.Users.findOne({ where: { user_id: id } });
  if (!findId) {
    return commonHelpers.generateApiResponse(
      res,
      req,
      `User Id ${id} Not Found`,
      404,
      []
    );
  }
  const getUserById = await Models.Users.findOne({
    where: {
      user_id: id,
    },
  });
  return commonHelpers.generateApiResponse(
    res,
    req,
    "User Found",
    200,
    getUserById
  );
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  let findId = await Models.Users.findOne({
    where: { user_id: id },
  });
  if (!findId) {
    return commonHelpers.generateApiResponse(
      res,
      req,
      `|User Id ${id} Not Found`,
      404,
      []
    );
  }
  const updateUser = await Models.Users.update(req.body, {
    where: {
      user_id: id,
    },
  });
  return commonHelpers.generateApiResponse(
    res,
    req,
    `User Id ${id} Data updated`,
    200,
    updateUser
  );
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  let findId = await Models.Users.findOne({ where: { user_id: id } });
  if (!findId) {
    return commonHelpers.generateApiResponse(
      res,
      req,
      `User Id ${id} Not Found`,
      404,
      []
    );
  }
  await Models.Users.destroy({
    where: {
      user_id: id,
    },
  });
  return commonHelpers.generateApiResponse(
    res,
    req,
    `User Id ${id} Deleted`,
    200,
    []
  );
};

module.exports = {
  addUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  login,
};
