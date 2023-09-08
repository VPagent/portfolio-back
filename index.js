const express = require("express");
require("dotenv").config();

const {
  softSkills,
  summary,
  techSkills,
  workExperience,
  projects,
  education,
  languages,
} = require("./data");

const PORT = 8080;

const app = express();
const token = process.env.TG_TOKEN;
const chat_id = process.env.CHAT_ID;

app.get("/", (req, res) => {
  res
    .status(200)
    .header("Access-Control-Allow-Origin", "*")
    .header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    .json({ message: "I'm ready" });
});

app.get("/summary", (req, res) => {
  res
    .status(200)
    .header("Access-Control-Allow-Origin", "*")
    .header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    .json(summary);
});

app.get("/softSkills", (req, res) => {
  res
    .status(200)
    .header("Access-Control-Allow-Origin", "*")
    .header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    .json(softSkills);
});

app.get("/techSkills", (req, res) => {
  res
    .status(200)
    .header("Access-Control-Allow-Origin", "*")
    .header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    .json(techSkills);
});

app.get("/workExperience", (req, res) => {
  res
    .status(200)
    .header("Access-Control-Allow-Origin", "*")
    .header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    .json(workExperience);
});

app.get("/projects", (req, res) => {
  res
    .status(200)
    .header("Access-Control-Allow-Origin", "*")
    .header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    .json(projects);
});

app.get("/education", (req, res) => {
  res
    .status(200)
    .header("Access-Control-Allow-Origin", "*")
    .header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    .json(education);
});

app.get("/languages", (req, res) => {
  res
    .status(200)
    .header("Access-Control-Allow-Origin", "*")
    .header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    .json(languages);
});

app.get("/keys", (req, res) => {
  if (!token || !chat_id) {
    res
      .status(500)
      .header("Access-Control-Allow-Origin", "*")
      .header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      )
      .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
      .json({ message: "token or chat_id are undefined" });
  }
  res
    .status(200)
    .header("Access-Control-Allow-Origin", "*")
    .header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    .header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    .json({ token, chat_id });
});

app.listen(PORT, () => {
  console.log("Hello");
});
