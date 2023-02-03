const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<!DOCTYPE html><html><head><title>Hello World!</title></head><body><h1>Hello World!</h1><p>É isto!</p></body></html>");
});

app.listen(3000);