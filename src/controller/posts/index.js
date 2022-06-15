const Models = require("../../models");

var { commonHelpers } = require("../../helpers");

const addPosts = async (req, res) => {
  if (!req.body.title || !req.body.description) {
    res.status(400).send({ message: "Require All fields" });
    return;
  }
  const { user_id } = req.user.dataValues;
  const payload = {
    user_id: user_id,
    title: req.body.title,
    description: req.body.description,
    published: req.body.published,
    status: req.body.status,
  };
  try {
    const createPost = await Models.Posts.create(payload);
    return commonHelpers.generateApiResponse(
      res,
      req,
      `User Posted`,
      200,
      createPost
    );
  } catch (err) {
    return commonHelpers.generateApiResponse(
      res,
      req,
      `User is not found to Post`,
      404,
      []
    );
  }
};

const getPosts = async (req, res) => {
  const { user_id } = req.user.dataValues;
  const getPosts = await Models.Posts.findAndCountAll({
    where: {
      user_id: user_id,
    },
  });

  if (
    getPosts == null ||
    typeof getPosts.count == "undefined" ||
    getPosts.count <= 0
  ) {
    return commonHelpers.generateApiResponse(
      res,
      req,
      "Posts Not Found",
      404,
      []
    );
  }
  return commonHelpers.generateApiResponse(
    res,
    req,
    "Users Posts",
    200,
    getPosts
  );
};

const getpostById = async (req, res) => {
  const id = req.params.id;
  const findId = await Models.Posts.findOne({ where: { id: id } });
  if (!findId) {
    return commonHelpers.generateApiResponse(
      res,
      req,
      `User Id ${id} Not Found`,
      404,
      []
    );
  }
  const getpostById = await Models.Posts.findOne({ where: { id: id } });
  return commonHelpers.generateApiResponse(
    res,
    req,
    `User found`,
    200,
    getpostById
  );
};

const updatePost = async (req, res) => {
  let id = req.params.id;

  let findId = await Models.Posts.findOne({ where: { id: id } });
  if (!findId) {
    return commonHelpers.generateApiResponse(
      res,
      req,
      `User Id ${id} Not Found`,
      404,
      []
    );
  }
  const { user_id } = req.user.dataValues;
  const payload = {
    user_id: user_id,
    title: req.body.title,
    description: req.body.description,
    published: req.body.published,
    status: req.body.status,
  };
  const updatePost = await Models.Posts.update(payload, {
    where: { id: id },
  });
  return commonHelpers.generateApiResponse(
    res,
    req,
    `User Id ${id} Data updated`,
    200,
    updatePost
  );
};

const deletePost = async (req, res) => {
  let id = req.params.id;
  let findId = await Models.Posts.findOne({ where: { id: id } });
  if (!findId) {
    return commonHelpers.generateApiResponse(
      res,
      req,
      `User Id ${id} Not Found`,
      404,
      []
    );
  }
  await Models.Posts.destroy({ where: { id: id } });
  return commonHelpers.generateApiResponse(res, req, `Post Deleted`, 200, []);
};

module.exports = {
  addPosts,
  getPosts,
  getpostById,
  updatePost,
  deletePost,
};
