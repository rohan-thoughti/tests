const usersController = require("../controller/users")({});
const postController = require("../controller/posts")({});
module.exports = (router, expressApp) => {
  router.get("/get/users", usersController.getUsers);
  router.post("/add/user", usersController.adduser);
  router.get("/get/userbyid/:id", usersController.getUserById);
  router.patch("/update/user/:id", usersController.updateUser);
  router.delete("/delete/user/:id", usersController.deleteUser);

  //POsts

  router.get("/get/posts", postController.getPosts);
  router.post("/add/post", postController.addPosts);
  router.get("/get/postbyid/:id", postController.getpostById);
  router.patch("/update/posts/:id", postController.updatePost);
  router.delete("/delete/post/:id", postController.deletePost);
  return router;
};
