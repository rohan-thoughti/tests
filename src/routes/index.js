const express = require("express");
const router = require("express").Router();

const userRoutes = require("./users");
const postRoutes = require("./posts");

router.use("/", userRoutes);
router.use("/", postRoutes);

module.exports = router;
