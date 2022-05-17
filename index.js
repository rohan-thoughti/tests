const express = require("express");
const app = express();
const body = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const req = require("express/lib/request");

const BASE_PATH = "http://localhost:5000/";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "users_posts",
});

app.use(cors());
app.use(express.json());
app.use(body.urlencoded({ extended: true }));
const port = 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Test app Listening to ${port}`);
});
