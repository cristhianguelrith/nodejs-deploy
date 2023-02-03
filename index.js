const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/oi", function (req, res) {
  res.send("Olá, Mundo!");
});

const itens = ["Rick Sanchez", "Morty Smith", "Summer Smith"];

// CRUD -> Lista de Informações

// Endpoint Read All

app.get("/item", function (req, res) {
  res.send(itens);
});
  
// Endpoint Read Single by ID
app.get("/item/:id", function (req, res) {
  const id = req.params.id;
  const item = itens[id - 1]
  res.send(item);
});

// Endpoint Create
app.post("/item", function (req, res) {
  // console.log(req.body);
  const item = req.body;
  itens.push(item.nome)
  res.send("Item criado com sucesso!");
})

app.listen(3000);