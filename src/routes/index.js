const router = require("express").Router();

let { commonHelpers } = require("../helpers");

router.get("/", (req, res) => {
  return commonHelpers.generateApiResponse(
    res,
    req,
    "Test app is running.",
    200
  );
});

module.exports = router;
