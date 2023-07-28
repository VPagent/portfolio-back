const express = require("express");

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  console.log("pabotayou");
  res.status(200).send("<h1>Welcome to Ideal Software</h1>");
});
app.get("/home", (req, res) => {
  res.status(200).send("<h1>HomePage</h1>");
});
app.listen(PORT, () => {
  console.log("Hello");
});
