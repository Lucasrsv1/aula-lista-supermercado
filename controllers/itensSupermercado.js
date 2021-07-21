const models = require("../database/models");

/**
 * Rota para obter a lista do supermercado
 * @param {import("express").Request} req objeto de requisição da rota
 * @param {import("express").Response} res objeto de resposta da rota
 */
async function obtemLista (req, res) {
	try {
		const itens = await models.Itens.findAll({
			attributes: ["id", "descricao", "quantidade", "estaNoCarrinho"],
			order: [["descricao", "ASC"]]
		});
		res.status(200).json(itens);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Não foi possível recuperar a lista.", error });
	}
}

/**
 * Rota para adicionar um item à lista do supermercado
 * @param {import("express").Request} req objeto de requisição da rota
 * @param {import("express").Response} res objeto de resposta da rota
 */
async function adicionaItem (req, res) {
	if (!req.body.descricao || !req.body.quantidade || isNaN(req.body.quantidade) || req.body.quantidade < 0)
		return res.status(400).json({ message: "Item inválido." });

	try {
		const item = await models.Itens.create({
			descricao: req.body.descricao,
			quantidade: req.body.quantidade
		});

		res.status(201).json(item);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Não foi possível adicionar o item à lista.", error });
	}
}

/**
 * Rota para atualizar o carrinho com um item
 * @param {import("express").Request} req objeto de requisição da rota
 * @param {import("express").Response} res objeto de resposta da rota
 */
async function atualizarCarrinho (req, res) {
	if (!req.params.idItem || (req.body.estaNoCarrinho !== true && req.body.estaNoCarrinho !== false))
		return res.status(400).json({ message: "Parâmetros inválidos." });

	const id = parseInt(req.params.idItem);
	try {
		const qtdItensAtualizados = (await models.Itens.update(
			{ estaNoCarrinho: req.body.estaNoCarrinho },
			{ where: { id } }
		))[0];

		if (qtdItensAtualizados > 0)
			return res.status(200).json({ message: "Item atualizado." });

		res.status(404).json({ message: "Item não encontrado." });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Não foi possível deletar o item.", error });
	}
}

/**
 * Rota para remover um item
 * @param {import("express").Request} req objeto de requisição da rota
 * @param {import("express").Response} res objeto de resposta da rota
 */
async function removerItem (req, res) {
	const id = parseInt(req.params.idItem);
	try {
		const qtdItensDeletados = await models.Itens.destroy({ where: { id } });
		if (qtdItensDeletados > 0)
			return res.status(200).json({ message: "Item deletado." });

		res.status(404).json({ message: "Item não encontrado." });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Não foi possível deletar o item.", error });
	}
}

module.exports = { obtemLista, adicionaItem, atualizarCarrinho, removerItem };
