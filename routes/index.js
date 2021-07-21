const { bemVindo, timestamp } = require("../controllers/geral");

const v1 = require("./v1");

/**
 * Configura as rotas da API
 * @param {import("express").Router} roteador roteador de rotas da API
 */
function configuraRotasAPI (roteador) {
	roteador.get("/", bemVindo);

	roteador.get("/timestamp", timestamp);

	roteador.use("/v1", v1);
}

module.exports = configuraRotasAPI;
