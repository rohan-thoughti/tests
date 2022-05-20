const usersController = require("../controller/users");
// const postController = require("../controller/posts")({});

const router = require("express").Router();
router.get("/users", usersController.getUsers);
router.post("/users", usersController.addUser);
// router.get("/users/:id", usersController.getUserById);
// router.patch("/users/:id", usersController.updateUser);
// router.delete("/users/:id", usersController.deleteUsder);

//POsts

// router.get("/get/posts", postController.getPosts);
// router.post("/add/post", postController.addPosts);
// router.get("/get/postbyid/:id", postController.getpostById);
// router.patch("/update/posts/:id", postController.updatePost);
// router.delete("/delete/post/:id", postController.deletePost);
module.exports = router;
