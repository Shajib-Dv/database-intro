/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

// user data
const user = [
  { name: "Abul", email: "abul@gmail.com" },
  { name: "Babul", email: "babul@gmail.com" },
  { name: "Kabul", email: "kabul@gmail.com" },
  { name: "Mabul", email: "mabul@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("database management server is running");
});

app.get("/user", (req, res) => {
  res.send(user);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
