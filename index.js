const express = require("express");
const {
  softSkills,
  summary,
  techSkills,
  workExperience,
  projects,
} = require("./data");

const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "I'm ready" });
});

app.get("/summary", (req, res) => {
  res.status(200).json(summary);
});

app.get("/softSkills", (req, res) => {
  res.status(200).json(softSkills);
});

app.get("/techSkills", (req, res) => {
  res.status(200).json(techSkills);
});

app.get("/workExperience", (req, res) => {
  res.status(200).json(workExperience);
});

app.get("/projects", (req, res) => {
  res.status(200).json(projects);
});

app.listen(PORT, () => {
  console.log("Hello");
});
