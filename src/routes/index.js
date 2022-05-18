const usersController = require("../controller/users")({});
module.exports = (router, expressApp) => {
  router.get("/get/users", usersController.getUsers);
  router.post("/add/user", usersController.adduser);
  router.get("/get/userbyid/:id", usersController.getUserById);
  return router;
};
