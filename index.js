/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// user data
const user = [
  { id: 1, name: "Abul", email: "abul@gmail.com" },
  { id: 2, name: "Babul", email: "babul@gmail.com" },
  { id: 3, name: "Kabul", email: "kabul@gmail.com" },
  { id: 4, name: "Mabul", email: "mabul@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("database management server is running");
});

app.get("/user", (req, res) => {
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log(req.body);
  const newUser = req.body;
  newUser.id = user.length + 1;
  user.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
