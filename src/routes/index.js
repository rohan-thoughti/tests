const express = require("express");
const router = require("express").Router();

let { commonHelpers } = require("../helpers");
const userRoutes = require("./users");
const postRoutes = require("./posts");

router.get("/", (req, res) => {
  return commonHelpers.generateApiResponse(res, req, "Test app is running.", 200);
});

router.use("/", userRoutes);
router.use("/", postRoutes);

module.exports = router;
