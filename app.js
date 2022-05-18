const express = require("express");
const app = express();
const body = require("body-parser");
const cors = require("cors");

const db = require("./src/helper/mysql");

app.use(cors());
app.use(express.json());
app.use(body.urlencoded({ extended: true }));
const port = 5000;

// let sampleApp = express.Router().get("/sam", function (req, res) {
//   res.send("Hello World");
// });
// app.use("/sam", sampleApp);
let application = require("./src/")(express.Router(), app);
app.use("/", application);
app.get("/", (req, res) => {
  res.send("hello");
});

// app.post("/add/user", (req, res) => {
//   const { name, email, password } = req.body;
//   let options = {};
//   const sqlAddUser =
//     "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
//   db.query(sqlAddUser, [name, email, password], (err, result) => {
//     if (!err) {
//       options.response = result;
//       options.status = 200;
//       options.error = null;
//       res.send(options);
//     } else {
//       options.response = null;
//       options.status = 500;
//       options.error = err;
//       res.send(options);
//     }
//   });
// });

app.get("/get/userbyid/:id", (req, res) => {
  const { id } = req.params;
  let options = {};
  const sqlGetUserById = "SELECT * FROM users WHERE user_id = ?";
  db.query(sqlGetUserById, id, (err, result) => {
    if (!err) {
      options.response = result;
      options.status = 200;
      options.error = null;
      res.send(options);
    } else {
      options.response = null;
      options.status = 500;
      options.error = err;
      res.send(options);
    }
  });
});

app.patch("/update/user/:id", (req, res) => {
  const { id } = req.params;
  let options = {};
  const { name, email, password } = req.body;
  const sqlUpdateUser =
    "UPDATE users SET name = ?, email= ?, password = ? WHERE user_id = ?";
  db.query(sqlUpdateUser, [name, email, password, id], (err, result) => {
    if (!err) {
      options.response = result;
      options.status = 200;
      options.error = null;
      res.send(options);
    } else {
      options.response = null;
      options.status = 500;
      options.error = err;
      res.send(options);
    }
  });
});

app.delete("/delete/user/:id", (req, res) => {
  const { id } = req.params;
  let options = {};
  const sqlDeleteUser = "DELETE FROM users WHERE user_id = ?";
  db.query(sqlDeleteUser, id, (err, result) => {
    if (!err) {
      options.response = result;
      options.status = 200;
      options.error = null;
      res.send(options);
    } else {
      options.response = null;
      options.status = 500;
      options.error = err;
      res.send(options);
    }
  });
});

//POSTS

app.post("/add/post", (req, res) => {
  const { user_id, title, description } = req.body;
  console.log(req.body);
  let options = {};
  const sqlAddPost =
    "INSERT INTO posts (user_id, title, description) VALUES (?, ?, ?)";
  db.query(sqlAddPost, [user_id, title, description], (err, result) => {
    if (!err) {
      options.response = result;
      options.status = 200;
      options.error = null;
      res.send(options);
    } else {
      options.response = null;
      options.status = 500;
      options.error = err;
      res.send(options);
    }
  });
});

app.get("/get/posts", (req, res) => {
  const sqlGetPosts =
    "SELECT `id`, `user_id`, `title`, `description`, `published`, `created_at`, `updated_at`, `deleted_at`, `status` FROM `users_posts`.`posts`";
  let options = {};
  db.query(sqlGetPosts, (err, result) => {
    if (!err) {
      options.response = result;
      options.status = 200;
      options.error = null;
      res.send(options);
    } else {
      options.response = null;
      options.status = 500;
      options.error = err;
      res.send(options);
    }
  });
});

app.get("/get/postbyid/:id", (req, res) => {
  const { id } = req.params;
  let options = {};
  const sqlGetPostById = "SELECT * FROM posts WHERE id = ?";
  db.query(sqlGetPostById, id, (err, result) => {
    if (!err) {
      options.response = result;
      options.status = 200;
      options.error = null;
      res.send(options);
    } else {
      options.response = null;
      options.status = 500;
      options.error = err;
      res.send(options);
    }
  });
});

app.patch("/update/posts/:id", (req, res) => {
  const { id } = req.params;
  let options = {};
  const { title, description } = req.body;
  const sqlUpdatePost =
    "UPDATE posts SET title = ?, description = ? WHERE id = ?";
  db.query(sqlUpdatePost, [title, description, id], (err, result) => {
    if (!err) {
      options.response = result;
      options.status = 200;
      options.error = null;
      res.send(options);
    } else {
      options.response = null;
      options.status = 500;
      options.error = err;
      res.send(options);
    }
  });
});

app.delete("/delete/post/:id", (req, res) => {
  const { id } = req.params;
  let options = {};
  const sqlDeletepost = "DELETE FROM posts WHERE id = ?";
  db.query(sqlDeletepost, id, (err, result) => {
    if (!err) {
      options.response = result;
      options.status = 200;
      options.error = null;
      res.send(options);
    } else {
      options.response = null;
      options.status = 500;
      options.error = err;
      res.send(options);
    }
  });
});

app.listen(port, () => {
  console.log(`Test app Listening to ${port}`);
});
