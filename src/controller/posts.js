// const model = require("../model/posts")({});
// module.exports = (options) => {
//   return {
//     getPosts,
//     addPosts,
//     getpostById,
//     updatePost,
//     deletePost,
//   };
// };

// const getPosts = (req, res) => {
//   let payload = {};
//   model.getPosts(payload, function (response) {
//     res.send(response);
//   });
// };

// const addPosts = (req, res) => {
//   let data = req.body;
//   let payload = {
//     user_id: data.user_id,
//     title: data.title,
//     description: data.description,
//   };
//   model.addPosts(payload, (response) => {
//     res.send(response);
//   });
// };

// const getpostById = (req, res) => {
//   console.log(req);
//   let data = {
//     id: req.params,
//   };
//   console.log(data);
//   model.getpostById(data, (response) => {
//     res.send(response);
//   });
// };

// const updatePost = (req, res) => {
//   console.log(req);
//   const { id } = req.params;
//   let data = {
//     id,
//     title: req.body.title,
//     description: req.body.description,
//   };

//   console.log(data);
//   model.updatePost(data, (response) => {
//     res.send(response);
//   });
// };

// const deletePost = (req, res) => {
//   console.log(req);
//   let data = {
//     id: req.params,
//   };
//   model.deletePost(data, (response) => {
//     res.send(response);
//   });
// };
