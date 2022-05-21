const usersController = require("../controller/users");
const postController = require("../controller/posts");

const router = require("express").Router();
router.get("/users", usersController.getUsers);
router.post("/users", usersController.addUser);
router.get("/users/:id", usersController.getUserById);
router.patch("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

//Posts

router.get("/posts", postController.getPosts);
router.post("/posts", postController.addPosts);
router.get("/posts/:id", postController.getpostById);
router.patch("/posts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);
module.exports = router;
