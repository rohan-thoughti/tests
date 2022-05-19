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

app.listen(port, () => {
  console.log(`Test app Listening to ${port}`);
});
