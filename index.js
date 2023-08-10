const express = require("express");
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

app.listen(PORT, () => {
  console.log("Hello");
});
