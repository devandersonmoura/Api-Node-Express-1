const express = require("express");
const server = express();

// http://localhost:3000/hello?nome=Anderson&idade=30
// Query params = ?nome=Anderson&idade=30

server.get("/hello", (req, res) => {
  const { nome, idade } = req.query;

  return res.json({
    title: "Hello, World!",
    menssage: `Olá ${nome} tudo bem!?`,
    idade: idade,
  });
});

// http://localhost:3000/hello/Anderson
// Route params = /hello/:nome

server.get("/hello/:nome", (req, res) => {
  const nome = req.params.nome;

  return res.json({
    title: "Hello, World!",
    menssage: `Olá ${nome} tudo bem!?`,
  });
});

server.listen(3000);
