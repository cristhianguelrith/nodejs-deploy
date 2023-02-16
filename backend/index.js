const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

// Localhost ou 127.0.0.1
// const DB_URL = "mongodb://127.0.0.1";
// localhost:3000/item - Storm
const DB_URL = "mongodb+srv://admin:2k9L9pcOOgW1SA6t@cluster0.dwijgfc.mongodb.net";
const DB_NAME = "cristhian-database";

async function main() {

// Conexão com o banco de dados
console.log("Conectando com o banco de dados...")
const client = await MongoClient.connect(DB_URL);
const db = client.db(DB_NAME)
const collection = db.collection("itens")
console.log("Banco de dados conectado com sucesso!")

const app = express();

// O que vier no body da requisição, está em JSON
app.use(express.json());

// Endpoint / -> Hello World!
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// Endpoint / -> Olá, Mundo!
app.get("/oi", function (req, res) {
  res.send("Olá, Mundo!");
});

// CRUD -> Lista de Informações.
const itens = ["Rick Sanchez", "Morty Smith", "Summer Smith"];

// Endpoint Read All.
app.get("/item", async function (req, res) {
  const documentos = await collection.find().toArray();
  res.send(documentos);
});
  
// Endpoint Read Single by ID.
app.get("/item/:id", async function (req, res) {
  const id = req.params.id;
  const item = await collection.findOne({ _id: new ObjectId(id) });
  res.send(item);
});

// Endpoint Create.
app.post("/item", async function (req, res) {
  // console.log(req.body);
  const item = req.body;
  await collection.insertOne(item);
  res.send(item);
})

// Endpoint Update.

app.put("/item/:id", async function (req,res) {
  const id = req.params.id;
  const body = req.body;

  await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: body }
  );

  res.send(body)
});

// Endpoint Delete.
app.delete("/item/:id", async function (req,res) {
  const id = req.params.id;

  await collection.deleteOne({_id:new ObjectId(id) });
  
  res.send("Registro deletado com sucesso!");
});

// Porta de saída
app.listen(3000);
}

main();