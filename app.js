require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;

let application = require("./src/routes/index");
app.use("/", application);

app.get("/", (req, res) => {
  res.send("hello Users");
});

app.listen(port, () => {
  console.log(`Test app Listening to ${port}`);
});
