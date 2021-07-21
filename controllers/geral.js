/**
 * Rota de boas vindas.
 * @param {import("express").Request} req objeto de requisição da rota
 * @param {import("express").Response} res objeto de resposta da rota
 */
 function bemVindo (req, res) {
	res.status(200).json({ message: "Bem-vindo ao sistema de lista de supermercado." });
}

/**
 * Rota de timestamp.
 * @param {import("express").Request} req objeto de requisição da rota
 * @param {import("express").Response} res objeto de resposta da rota
 */
 function timestamp (req, res) {
	res.status(200).json({ timestamp: Date.now() });
}

module.exports = { bemVindo, timestamp };
