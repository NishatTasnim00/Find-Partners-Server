const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

//middle wire
app.use(cors());
app.use(express.json());

const charteredAccountants = require("./db.json");

app.get("/", (req, res) => {
  res.send("find partners is running...");
});
app.get("/charteredAccountants", (req, res) => {
    res.send(charteredAccountants);
  });
  app.get('/charteredAccountants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = charteredAccountants.find(item => item.id === id);
    res.send(result)
  })

app.listen(port, () => {
  console.log("find partners is running...");
});
