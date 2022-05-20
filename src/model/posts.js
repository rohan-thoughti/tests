// const db = require("../helper/mysql");
// module.exports = (options) => {
//   return {
//     getPosts,
//     addPosts,
//     getpostById,
//     updatePost,
//     deletePost,
//   };
// };

// const getPosts = (payload, callback) => {
//   const sqlGetPosts =
//     "SELECT `id`, `user_id`, `title`, `description`, `published`, `created_at`, `updated_at`, `deleted_at`, `status` FROM `users_posts`.`posts`";
//   let options = {};
//   db.query(sqlGetPosts, (err, result) => {
//     if (!err) {
//       options.response = result;
//       options.status = 200;
//       options.error = null;
//       callback(options);
//     } else {
//       options.response = null;
//       options.status = 500;
//       options.error = err;
//       callback(options);
//     }
//   });
// };

// const addPosts = (payload, callback) => {
//   let options = {};
//   console.log(payload);
//   const { user_id, title, description } = payload;
//   const props = [user_id, title, description];
//   console.log(props);
//   const sqlAddpost =
//     "INSERT INTO posts (user_id, title, description) VALUES (?, ?, ?)";
//   db.query(sqlAddpost, props, (err, result) => {
//     if (!err) {
//       options.response = result;
//       options.status = 201;
//       options.error = null;
//       callback(options);
//     } else {
//       options.response = null;
//       options.status = 500;
//       options.error = err;
//       callback(options);
//     }
//   });
// };

// const getpostById = (data, callback) => {
//   console.log(`Data ${data}`);
//   let options = {};
//   const { id } = data.id;
//   console.log(id);
//   const sqlGetPostById = "SELECT * FROM posts WHERE id = ?";
//   db.query(sqlGetPostById, id, (err, result) => {
//     if (!err) {
//       options.response = result;
//       options.status = 200;
//       options.error = null;
//       callback(options);
//     } else {
//       options.response = null;
//       options.status = 500;
//       options.error = err;
//       callback(options);
//     }
//   });
// };

// const updatePost = (data, callback) => {
//   console.log(data);
//   let options = {};
//   const { id, title, description } = data;
//   const props = [id, title, description];
//   const sqlUpdatePost =
//     "UPDATE posts SET title = ?, description = ? WHERE id = ?";
//   db.query(sqlUpdatePost, props, (err, result) => {
//     if (!err) {
//       options.response = result;
//       options.status = 200;
//       options.error = null;
//       callback(options);
//     } else {
//       options.response = null;
//       options.status = 500;
//       options.error = err;
//       callback(options);
//     }
//   });
// };

// const deletePost = (data, callback) => {
//   console.log(`Data ${data}`);
//   let options = {};
//   const { id } = data.id;
//   console.log(id);
//   const sqlDeletePost = "DELETE FROM posts WHERE id = ?";
//   console.log(sqlDeletePost);
//   db.query(sqlDeletePost, id, (err, result) => {
//     if (!err) {
//       options.response = result;
//       options.status = 200;
//       options.error = null;
//       callback(options);
//     } else {
//       options.response = null;
//       options.status = 500;
//       options.error = err;
//       callback(options);
//     }
//   });
// };
