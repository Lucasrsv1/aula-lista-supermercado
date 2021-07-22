const express = require("express");

const { obtemLista, adicionaItem, atualizarCarrinho, removerItem } = require("../controllers/itensSupermercado");

const roteador = express.Router();

roteador.get("/obtemLista/:idUsuario", obtemLista);

roteador.post("/adicionaItem/:idUsuario", adicionaItem);

roteador.patch("/atualizarCarrinho/:idItem", atualizarCarrinho);

roteador.delete("/removerItem/:idItem", removerItem);

module.exports = roteador;
