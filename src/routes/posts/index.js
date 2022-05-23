const postController = require("../../controller/posts");
const router = require("express").Router();

router.get("/posts", postController.getPosts);
router.post("/posts", postController.addPosts);
router.get("/posts/:id", postController.getpostById);
router.patch("/posts/:id", postController.updatePost);
router.delete("/posts/:id", postController.deletePost);

module.exports = router;
