const usersController = require("../../controller/users");
const router = require("express").Router();

router.get("/users", usersController.getUsers);
router.post("/users", usersController.addUser);
router.get("/users/:id", usersController.getUserById);
router.patch("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

module.exports = router;
