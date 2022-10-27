const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const tech = require("./data/tech.json");
const techDetail = require("./data/details.json");
const alldetails = require("./data/allDetail.json");

app.get("/", (req, res) => {
  res.send("Hello World! d");
});

app.get("/tech", (req, res) => {
  res.send(tech);
});

app.get("/technology/:id", (req, res) => {
  const id = req.params.id;
  const detail = techDetail.find((n) => n._id === id);
  res.send(detail);
});
app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const allDetail = alldetails.find((n) => n.id === id);
  res.send(allDetail);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
