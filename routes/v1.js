const express = require("express");

const { obtemLista, adicionaItem, atualizarCarrinho, removerItem } = require("../controllers/itensSupermercado");

const roteador = express.Router();

roteador.get("/obtemLista", obtemLista);

roteador.post("/adicionaItem", adicionaItem);

roteador.patch("/atualizarCarrinho/:idItem", atualizarCarrinho);

roteador.delete("/removerItem/:idItem", removerItem);

module.exports = roteador;
