const db = require("../model");

const posts = db.posts;

const addPosts = async (req, res) => {
  const payload = {
    user_id: req.body.user_id,
    title: req.body.title,
    description: req.body.description,
    published: req.body.published,
    status: req.body.status,
  };
  try {
    const createPost = await posts.create(payload);
    res.status(200).send(createPost);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Error Occured",
    });
  }
};

const getPosts = async (req, res) => {
  const getPosts = await posts.findAll({});
  res.status(200).send(getPosts);
};

const getpostById = async (req, res) => {
  const id = req.params.id;
  const getpostById = await posts.findOne({ where: { id: id } });
  res.status(200).send(getpostById);
};

const updatePost = async (req, res) => {
  let id = req.params.id;
  const updatePost = await posts.update(req.body, { where: { id: id } });
  res.status(200).send(updatePost);
};

const deletePost = async (req, res) => {
  let id = req.params.id;
  await posts.destroy({ where: { id: id } });
  res.status(200).send("Post Deleted");
};

module.exports = {
  addPosts,
  getPosts,
  getpostById,
  updatePost,
  deletePost,
};
